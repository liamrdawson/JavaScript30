const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
//  this.dataset refers to the 'data-' value stored in the element, in this case; px as we're using dataSet.sizing or 'data-sizing="px"'. Add 'or nothing ||' to avoid an undefined value.
    const suffix = this.dataset.sizing || ''; 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));