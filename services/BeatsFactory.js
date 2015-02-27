newsBeat.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];

  factory.addBeat = function() {
    factory.beats.push({ name: factory.beatName,
                          id: factory.beats.length +1,
                          reporters: []
    });
    factory.beatName = null;
  }

  factory.deleteBeat = function(beat) {
    var index = factory.beats.indexOf(beat);
    factory.beats.splice(index, 1);
  }

  return factory;
});
