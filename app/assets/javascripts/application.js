// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  var pollForResult = function(id) {
    console.log("POLLING for", id);
    $.get("/simulations/" + id).then(function(data) {
      console.log("SIMULATION", data);
      if (data.simulation.status === 'ready') {
        console.log("DONE!", data.simulation);
        $('#train').html('Done!');
        $('#train').attr('disabled', false);
        $('.classify').each(function(i, e) { $(e).data('simulation-id', id); });
        setTimeout(function() {
          $('#train').html('Train again');
        }, 3000);
      } else {
        setTimeout(function() {
          pollForResult(id);
        }, 2000);
      }
    }, function(xhr) {
      console.log("ERRORED in pollForResult", xhr);
      $('#train').attr('disabled', false);
      $('#train').html('Error :(');
      setTimeout(function() {
        $('#train').html('Train');
      }, 5000);
    });
  };

  var createSimulation = function() {
    $.ajax({
      type: "POST",
      url: "/simulations",
      success: function(data) {
        console.log("DATA", data);
        $('#train').html('Training...');
        $('#train').attr('disabled', true);
        pollForResult(data.simulation.id);
      },
      error: function(xhr) {
        console.log("ERRORED in createSimulation", xhr);
        $('#train').html('Train');
        $('#train').attr('disabled', false);
      }
    });
  };

  var getClassification = function(context) {
    var $context = $(context);
    var measurements = $context.data('measurements');
    var simulationId = $context.data('simulation-id');
    var uri = "/simulations/" + simulationId + "/classify_with_pretrained?measurements=" + measurements;
    console.log("URL", uri);
    $.get(uri).then(function(data) {
      console.log("CLASSIFICATION", data.classification);
      $context.html(data.classification + "!")
      setTimeout(function() {
        $context.html('Classify')
      }, 10000);
    }, function(xhr) {
      console.log("ERRORED in getClassification", xhr);
    });
  };

  var getUserClassification = function(context) {
    var $context = $(context);
    var measurements = $('.user-measurements').val();
    var simulationId = $($('.classify')[0]).data('simulation-id');
    var uri = "/simulations/" + simulationId + "/classify_with_pretrained?measurements=" + measurements;
    console.log("URL", uri);
    $.get(uri).then(function(data) {
      console.log("CLASSIFICATION", data.classification);
      $context.html(data.classification + "!")
      setTimeout(function() {
        $context.html('Classify readings')
      }, 10000);
    }, function(xhr) {
      console.log("ERRORED in getClassification", xhr);
      $context.html('Classify measurements')
    });
  };

  $("#train").on("click", function() {
    createSimulation();
  });

  $('.classify').on("click", function() {
    getClassification(this);
  });

  $('.user-classify').on("click", function() {
    getUserClassification(this);
  });
});
