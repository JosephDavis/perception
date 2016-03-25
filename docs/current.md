## Classes

<dl>
<dt><a href="#EventDispatcher">EventDispatcher</a></dt>
<dd><p>Stores event listeners and provides the capability to notify them of events.</p>
</dd>
<dt><a href="#ObservableArray">ObservableArray</a></dt>
<dd><p>Provides the functionality for observing changes made to an Array. All instance methods available
on Array and EventDispatcher are available to an ObservableArray.</p>
</dd>
<dt><a href="#ObservableMap">ObservableMap</a></dt>
<dd><p>Provides the functionality for observing changes to a Map. All instance methods available on Map
and EventDispatcher are available to an ObservableMap.</p>
</dd>
<dt><a href="#ObservableSet">ObservableSet</a></dt>
<dd><p>Provides the functionality for observing changes to a Set. All instance methods available on Set
and EventDispatcher are available to an ObservableSet.</p>
</dd>
<dt><a href="#ObservableValue">ObservableValue</a></dt>
<dd><p>Provides the capability to maintain observers for a specific value or reference.</p>
</dd>
</dl>

<a name="EventDispatcher"></a>

## EventDispatcher
Stores event listeners and provides the capability to notify them of events.

**Kind**: global class  

* [EventDispatcher](#EventDispatcher)
    * [new EventDispatcher()](#new_EventDispatcher_new)
    * [.addListener(event, listener)](#EventDispatcher+addListener) ⇒ <code>[EventDispatcher](#EventDispatcher)</code>
    * [.removeListener(event, listener)](#EventDispatcher+removeListener)
    * [.removeListeners(event)](#EventDispatcher+removeListeners)
    * [.getListeners(event)](#EventDispatcher+getListeners) ⇒ <code>Listeners</code>
    * [.dispatch(event, [object])](#EventDispatcher+dispatch)

<a name="new_EventDispatcher_new"></a>

### new EventDispatcher()
Creates an instance of EventDispatcher.

<a name="EventDispatcher+addListener"></a>

### eventDispatcher.addListener(event, listener) ⇒ <code>[EventDispatcher](#EventDispatcher)</code>
Registers a listener for the provided event.

**Kind**: instance method of <code>[EventDispatcher](#EventDispatcher)</code>  
**Returns**: <code>[EventDispatcher](#EventDispatcher)</code> - the instance  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to add the listener to |
| listener | <code>function</code> | the listener to register |

<a name="EventDispatcher+removeListener"></a>

### eventDispatcher.removeListener(event, listener)
Remove the provided event listener. If the listener is not present for the  provided event,
the method has no operation.

**Kind**: instance method of <code>[EventDispatcher](#EventDispatcher)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to remove the listener from |
| listener | <code>function</code> | the listener to remove |

<a name="EventDispatcher+removeListeners"></a>

### eventDispatcher.removeListeners(event)
Removes any listeners for the provided event classifier.

**Kind**: instance method of <code>[EventDispatcher](#EventDispatcher)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to remove listeners for |

<a name="EventDispatcher+getListeners"></a>

### eventDispatcher.getListeners(event) ⇒ <code>Listeners</code>
Gets a copy of the listeners for the provided event classifier.

**Kind**: instance method of <code>[EventDispatcher](#EventDispatcher)</code>  
**Returns**: <code>Listeners</code> - the listeners copy or null if no listeners are present  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to copy listeners from |

<a name="EventDispatcher+dispatch"></a>

### eventDispatcher.dispatch(event, [object])
Dispatches the provided event, optionally accepting an object to pass to listeners.

**Kind**: instance method of <code>[EventDispatcher](#EventDispatcher)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to dispatch |
| [object] | <code>\*</code> | optional object to pass to listeners |

<a name="ObservableArray"></a>

## ObservableArray
Provides the functionality for observing changes made to an Array. All instance methods available
on Array and EventDispatcher are available to an ObservableArray.

**Kind**: global class  

* [ObservableArray](#ObservableArray)
    * [new ObservableArray()](#new_ObservableArray_new)
    * [.pop()](#ObservableArray+pop) ⇒ <code>\*</code>
    * [.push(...arguments)](#ObservableArray+push) ⇒ <code>number</code>
    * [.shift(...arguments)](#ObservableArray+shift) ⇒
    * [.unshift(...arguments)](#ObservableArray+unshift) ⇒
    * [.splice(start, deleteCount)](#ObservableArray+splice) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.clear()](#ObservableArray+clear)
    * ["add"](#ObservableArray+event_add)
    * ["remove"](#ObservableArray+event_remove)
    * ["clear"](#ObservableArray+event_clear)

<a name="new_ObservableArray_new"></a>

### new ObservableArray()
Creates an instance of ObservableArray. Arguments are forwarded to the Array constructor.

<a name="ObservableArray+pop"></a>

### observableArray.pop() ⇒ <code>\*</code>
Removes the last element from the dispatcher array.

**Kind**: instance method of <code>[ObservableArray](#ObservableArray)</code>  
**Returns**: <code>\*</code> - the removed element  
**Emits**: <code>[remove](#ObservableArray+event_remove)</code>  
<a name="ObservableArray+push"></a>

### observableArray.push(...arguments) ⇒ <code>number</code>
Adds one or more elements to the end of the dispatcher.

**Kind**: instance method of <code>[ObservableArray](#ObservableArray)</code>  
**Returns**: <code>number</code> - the new length of the dispatcher array  
**Emits**: <code>[add](#ObservableArray+event_add)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>\*</code> | 

<a name="ObservableArray+shift"></a>

### observableArray.shift(...arguments) ⇒
Removes the first element from the dispatcher array.

**Kind**: instance method of <code>[ObservableArray](#ObservableArray)</code>  
**Returns**: the removed element  
**Emits**: <code>[remove](#ObservableArray+event_remove)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>\*</code> | 

<a name="ObservableArray+unshift"></a>

### observableArray.unshift(...arguments) ⇒
Adds one or more elments to the beginning of the dispatcher array.

**Kind**: instance method of <code>[ObservableArray](#ObservableArray)</code>  
**Returns**: the new length of the dispatcher array  
**Emits**: <code>[add](#ObservableArray+event_add)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>\*</code> | 

<a name="ObservableArray+splice"></a>

### observableArray.splice(start, deleteCount) ⇒ <code>Array.&lt;\*&gt;</code>
Changes the content of the array by removing existing elements and/or adding new elements

**Kind**: instance method of <code>[ObservableArray](#ObservableArray)</code>  
**Returns**: <code>Array.&lt;\*&gt;</code> - the removed elements  
**Emits**: <code>[add](#ObservableArray+event_add)</code>, <code>[remove](#ObservableArray+event_remove)</code>  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | the index signifying where to start changing the array |
| deleteCount | <code>number</code> | number of elements to remove |

<a name="ObservableArray+clear"></a>

### observableArray.clear()
Clears the contents of the array.

**Kind**: instance method of <code>[ObservableArray](#ObservableArray)</code>  
<a name="ObservableArray+event_add"></a>

### "add"
Provides an array of added elements to listeners.

**Kind**: event emitted by <code>[ObservableArray](#ObservableArray)</code>  
<a name="ObservableArray+event_remove"></a>

### "remove"
Provides an array of removed elements to listeners.

**Kind**: event emitted by <code>[ObservableArray](#ObservableArray)</code>  
<a name="ObservableArray+event_clear"></a>

### "clear"
Provides an array of cleared element to listeners.

**Kind**: event emitted by <code>[ObservableArray](#ObservableArray)</code>  
<a name="ObservableMap"></a>

## ObservableMap
Provides the functionality for observing changes to a Map. All instance methods available on Map
and EventDispatcher are available to an ObservableMap.

**Kind**: global class  

* [ObservableMap](#ObservableMap)
    * [new ObservableMap()](#new_ObservableMap_new)
    * [.set(key, value)](#ObservableMap+set)
    * [.delete(key)](#ObservableMap+delete) ⇒ <code>\*</code>
    * [.clear()](#ObservableMap+clear)
    * ["set"](#ObservableMap+event_set)
    * ["remove"](#ObservableMap+event_remove)
    * ["clear"](#ObservableMap+event_clear)

<a name="new_ObservableMap_new"></a>

### new ObservableMap()
Create an instance of ObservableMap. Arguments are forwarded to the Map constructor.

<a name="ObservableMap+set"></a>

### observableMap.set(key, value)
Adds a new element with a specified key and value.

**Kind**: instance method of <code>[ObservableMap](#ObservableMap)</code>  
**Emits**: <code>[set](#ObservableMap+event_set)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | the key of the element |
| value | <code>\*</code> | the value of the element |

<a name="ObservableMap+delete"></a>

### observableMap.delete(key) ⇒ <code>\*</code>
Removes the element with the specified key.

**Kind**: instance method of <code>[ObservableMap](#ObservableMap)</code>  
**Returns**: <code>\*</code> - true if an element existed and was removed, otherwise false  
**Emits**: <code>[remove](#ObservableMap+event_remove)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | the key of the element |

<a name="ObservableMap+clear"></a>

### observableMap.clear()
Removes all elements.

**Kind**: instance method of <code>[ObservableMap](#ObservableMap)</code>  
**Emits**: <code>[clear](#ObservableMap+event_clear)</code>  
<a name="ObservableMap+event_set"></a>

### "set"
Provides listeners with the key and value of the element set on the map.

**Kind**: event emitted by <code>[ObservableMap](#ObservableMap)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | the key |
| value | <code>\*</code> | the value set |

<a name="ObservableMap+event_remove"></a>

### "remove"
Provides listeners with the key associated with element removed from the map.

**Kind**: event emitted by <code>[ObservableMap](#ObservableMap)</code>  
<a name="ObservableMap+event_clear"></a>

### "clear"
Provides listeners with an array of elements removed upon clearing the map.

**Kind**: event emitted by <code>[ObservableMap](#ObservableMap)</code>  
<a name="ObservableSet"></a>

## ObservableSet
Provides the functionality for observing changes to a Set. All instance methods available on Set
and EventDispatcher are available to an ObservableSet.

**Kind**: global class  

* [ObservableSet](#ObservableSet)
    * [new ObservableSet()](#new_ObservableSet_new)
    * [.add(value)](#ObservableSet+add) ⇒ <code>[ObservableSet](#ObservableSet)</code>
    * [.clear()](#ObservableSet+clear)
    * [.delete(value)](#ObservableSet+delete) ⇒ <code>boolean</code>
    * ["add"](#ObservableSet+event_add)
    * ["remove"](#ObservableSet+event_remove)
    * ["clear"](#ObservableSet+event_clear)

<a name="new_ObservableSet_new"></a>

### new ObservableSet()
Create an instance of ObservableSet.

<a name="ObservableSet+add"></a>

### observableSet.add(value) ⇒ <code>[ObservableSet](#ObservableSet)</code>
Appends a new element with the given value.

**Kind**: instance method of <code>[ObservableSet](#ObservableSet)</code>  
**Returns**: <code>[ObservableSet](#ObservableSet)</code> - the instance  
**Emits**: <code>[add](#ObservableSet+event_add)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of the element to add |

<a name="ObservableSet+clear"></a>

### observableSet.clear()
Removes all elements.

**Kind**: instance method of <code>[ObservableSet](#ObservableSet)</code>  
**Emits**: <code>[clear](#ObservableSet+event_clear)</code>  
<a name="ObservableSet+delete"></a>

### observableSet.delete(value) ⇒ <code>boolean</code>
Removes the element associated to the value.

**Kind**: instance method of <code>[ObservableSet](#ObservableSet)</code>  
**Returns**: <code>boolean</code> - true if an element is removed successfully  
**Emits**: <code>[remove](#ObservableSet+event_remove)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value to remove |

<a name="ObservableSet+event_add"></a>

### "add"
Provides listeners with the element added to the set.

**Kind**: event emitted by <code>[ObservableSet](#ObservableSet)</code>  
<a name="ObservableSet+event_remove"></a>

### "remove"
Provides listeners with the element removed from the Set.

**Kind**: event emitted by <code>[ObservableSet](#ObservableSet)</code>  
<a name="ObservableSet+event_clear"></a>

### "clear"
Provides listeners with an array of elements removed upon clearing the Set.

**Kind**: event emitted by <code>[ObservableSet](#ObservableSet)</code>  
<a name="ObservableValue"></a>

## ObservableValue
Provides the capability to maintain observers for a specific value or reference.

**Kind**: global class  

* [ObservableValue](#ObservableValue)
    * [new ObservableValue([initialValue])](#new_ObservableValue_new)
    * _instance_
        * [.get()](#ObservableValue+get) ⇒ <code>\*</code>
        * [.set(newValue)](#ObservableValue+set)
        * ["change"](#ObservableValue+event_change)
    * _static_
        * [.property(object, prop)](#ObservableValue.property) ⇒ <code>[ObservableValue](#ObservableValue)</code>
        * [.define(object, prop, [initialValue])](#ObservableValue.define) ⇒ <code>[ObservableValue](#ObservableValue)</code>

<a name="new_ObservableValue_new"></a>

### new ObservableValue([initialValue])
Creates an instance of ObservableValue.


| Param | Type | Description |
| --- | --- | --- |
| [initialValue] | <code>\*</code> | the initial value to store |

<a name="ObservableValue+get"></a>

### observableValue.get() ⇒ <code>\*</code>
Accesses the stored value.

**Kind**: instance method of <code>[ObservableValue](#ObservableValue)</code>  
**Returns**: <code>\*</code> - the stored value  
<a name="ObservableValue+set"></a>

### observableValue.set(newValue)
Mutates the stored value.

**Kind**: instance method of <code>[ObservableValue](#ObservableValue)</code>  
**Emits**: <code>[change](#ObservableValue+event_change)</code>  

| Param | Type | Description |
| --- | --- | --- |
| newValue | <code>\*</code> | the value to set |

<a name="ObservableValue+event_change"></a>

### "change"
**Kind**: event emitted by <code>[ObservableValue](#ObservableValue)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| old | <code>\*</code> | the old value |
| new | <code>\*</code> | the new value |

<a name="ObservableValue.property"></a>

### ObservableValue.property(object, prop) ⇒ <code>[ObservableValue](#ObservableValue)</code>
Allows for an object's existing property value to be observed.

**Kind**: static method of <code>[ObservableValue](#ObservableValue)</code>  
**Returns**: <code>[ObservableValue](#ObservableValue)</code> - the observable value created  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | the object containing the property |
| prop | <code>string</code> | the property name |

<a name="ObservableValue.define"></a>

### ObservableValue.define(object, prop, [initialValue]) ⇒ <code>[ObservableValue](#ObservableValue)</code>
Allows for the definition of an observable property on an object.

**Kind**: static method of <code>[ObservableValue](#ObservableValue)</code>  
**Returns**: <code>[ObservableValue](#ObservableValue)</code> - the observable value created  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | the object to define the property on |
| prop | <code>string</code> | the property name |
| [initialValue] | <code>\*</code> | the initial value to set |

