# Boostrap 5 SASS

## Why this repo?

Speedup your development workflow!  
We can achieve the same result as [tailwindCSS](https://tailwindcss.com/) using **bootstrap theming** [Read more.](https://getbootstrap.com/docs/4.0/getting-started/theming/).

This method is great for **fast frontend development**. No need to write your own css.

## Use case:

Your PSD/figma design has form labels **{font-size: 16px, color: #fff}**.  
We need to find the variables responsive for form labels.  
found in **bootstrap/scss/forms/_labels.scss**.  

```scss
.form-label {
	margin-bottom: $form-label-margin-bottom;
	@include font-size($form-label-font-size);
	font-style: $form-label-font-style;
	font-weight: $form-label-font-weight;
	color: $form-label-color;
}
```

open **_variables.scss** and override the defaults.  

```scss
$form-label-color: #fff;
$form-label-font-size: 16px;
```

### CSS classes included.

All added variables are declared inside **_variables.scss**.
  

#### Font size

Example of 0.9rem.

```scss
$custom-font-sizes: (
	'0.9rem'
)
```

css classes generated:

```scss
.font-size-0-9rem
.font-size-{breakpoint}-0-9rem
.font-size-md-0-9rem
.font-size-lg-0-9rem
.font-size-xl-0-9rem

.line-height-...
....
```
  

#### Custom height/width

Example of 100px.

```scss
$custom-width-sizes: (
	'100px'
)
```

css classes generated:

```scss
.h-100px
.min-h-100px
.max-h-100px
.max-h-md-100px
.max-h-lg-100px
...

.w-100px
...
```



