const pattern = /^([+-])?((\d+)[Dd])?\s*((\d+)[Hh])?\s*((\d+)[Mm])?\s*((\d+)[Ss])?\s*((\d+)(ms|MS|Ms)?)?$/;

function parse(value) {
  const match = value && pattern.exec(value.trim());
  if (match) {
    const p = match[1] === '-' ? -1 : 1;
    const d = parseInt(match[2], 10) || 0;
    const h = parseInt(match[4], 10) || 0;
    const m = parseInt(match[6], 10) || 0;
    const s = parseInt(match[8], 10) || 0;
    const ms = parseInt(match[10], 10) || 0;
    return p * (d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms);
  }
  return null;
}

function stringify(value) {
  const array = [];

  let n = value;
  if (n < 0) {
    n *= -1;
    array.push('-');
  }

  const d = Math.trunc(n / 86400000);
  if (d > 0) {
    array.push(`${d}d`);
  }

  n -= 86400000 * d;

  const h = Math.trunc(n / 3600000);
  if (h > 0) {
    array.push(`${h}h`);
  }

  n -= 3600000 * h;

  const m = Math.trunc(n / 60000);
  if (m > 0) {
    array.push(`${m}m`);
  }

  n -= 60000 * m;

  const s = Math.trunc(n / 1000);
  if (s > 0) {
    array.push(`${s}s`);
  }

  n -= 1000 * s;
  if (n > 0) {
    array.push(`${n}ms`);
  }

  return array.join('');
}

export default {
  parse,
  stringify
};
