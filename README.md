# Event-Based-Class-Extend-Helper
An event-based class extend helper which can make your class be able to deal with events

The source file is based on coffee script

You can use this extend helper in both nodejs and browser env. If you want to use it in browser env, just modify the source code to let it be a part of the global variable

backend usage:

<pre>
Class = require './class'

Animal = Class.extend
  initialize: (@name) ->
  
  eat: (food) ->
    console.log "i'm eating #{food}"

dog = new Animal
dog.on 'eat', dog.eat
dog.trigger 'eat', 'bones'
</pre>

Once you generated your class with this extend helper, you can use on, off, trigger to deal with your events on the object
