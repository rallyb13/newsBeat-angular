```
On the Beat: an angular JS website for news agencies.
```

OtB allows the assignment editor to keep track of the separate news "beats"
(e.g.: local, political, delicious) and assign reporters to them.
These beats can be filtered, so as to make handing out assignments easier
once the list of beats gets long.
It further allows for storing information about specific reporters
(e.g: name, how long they've been at the paper, and birthday).


```
Bugs 'n' other notes
```
If you select a beat to add reporters, then delete the beat, you can still,
somehow, add reporters to it. (Of course, as soon as you select another beat,
  you can't access that beat any other way, so all that info is still gone.)

Also, though it's not a bug, the current setup doesn't allow a reporter to exist
independent of a beat, or to be on multiple beats at once without being
completely re-entered. This is mostly because I'm new to angular.

Finally, also not a bug, but I think my next addition would be to be able to
update reporters...

Benjamin D. Herson is the author.
MIT license.
