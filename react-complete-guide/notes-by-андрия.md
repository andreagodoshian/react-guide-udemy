# Notes are starting from "State" lecture...
-------------

### Hooks:
Hooks typically start with the keyword "use..."

IMPORTANT - hooks are almost always called inside of the main function (with some exceptions).
Not outside, and also not nested.

### useState:
useState is provided by the main React library. You know, the one that "you don't need to import" anymore. How do we implement useState?? Easy - just call it.

Example: const [title, setTitle] = useState(props.title);
*useState (a hook), always returns EXACTLY TWO elements... first is always current && second is always the update.*

Example: setTitle("Updated!");
*since this is managed by react, we have to call the "state updating function" rather than setting it to a variable*

Final thoughts: if you watch the console in real-time, you will see the old value being logged upon the click... that's because calling the "state updating function" doesn't change it IMMEDIATELY, but it schedules it to be changed (yes, it's all still pretty fast tho)

