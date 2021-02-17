# Auro Custom Elements

Here are some base examples of using the Auro Design System elements with markdown.

## Button

<auro-button>It's an Auro button</auro-button>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-button>It's an Auro button</auro-button>
```

</auro-accordion>

## Alerts

<auro-alerts warning>
  <p>This is warning message 1.</p>
  <p>This is warning message 2.</p>
</auro-alerts>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-alerts warning>
  <p>This is warning message 1.</p>
  <p>This is warning message 2.</p>
</auro-alerts>
```

</auro-accordion>

## Date / Time

<auro-datetime type="date"></auro-datetime>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-datetime type="date"></auro-datetime>
```

</auro-accordion>

## Loader

<auro-loader ringworm md></auro-loader>
<auro-loader orbit md></auro-loader>
<auro-loader pulse md></auro-loader>
<auro-loader laser></auro-loader>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-loader ringworm md></auro-loader>
<auro-loader orbit md></auro-loader>
<auro-loader pulse md></auro-loader>
<auro-loader laser></auro-loader>
```

</auro-accordion>

## Popover

<auro-popover for="button1">
  Top popover content!
  <auro-button id="button1" slot="trigger">Popover Test</auro-button>
</auro-popover>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-popover for="button1">
  Top popover content!
  <auro-button id="button1" slot="trigger">Popover Test</auro-button>
</auro-popover>
```

</auro-accordion>
