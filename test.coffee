Class = require './class'

i = 0

Animal = Class.extend
	initialize: ->
		console.log "animal #{i++} has been created"
	eat: (food)->
		console.log "i'm eating #{food}"

dog = new Animal()
cat = new Animal()

dog.on 'eat', dog.eat
cat.on 'sleep', (hours) ->
	console.log "i've been sleeping for #{hours} hours"

dog.trigger 'eat', 'bones'
cat.trigger 'sleep', 3