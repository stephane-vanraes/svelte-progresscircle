# Svelte Progress Circle

A circular progress bar as a Svelte component.

## Basic usage

```html
<ProgressCircle max="10" {value}>
    <span>{value}</span>
</ProgressCirle>
```

## Props

### max

The maximum value.

### value

The current value.

## Slotted Content

The component does not show the current value by default, this is left to the consumer in the form of a slot, allowing them to style this as required.

## Styling

This component use CSS Variables for the styling with certain defaults, overriding these can easily be done in the parent.

### --progress-fill

The background color, defaults to _transparent_.

### --progress-linecap

The linecap defining how the edge of the progressbar will look like, defaults to _round_.

### --progress-color

The color of the actually bar, defaults to _lightgreen_

### --progress-trackcolor

The color of the track, defaults to _grey_

### --progress-width

The width of the bar, defaults to _10px_.

### --progress-trackwidth

The width of the track, defaults to _9px_.
