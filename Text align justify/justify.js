/*
  rules:

  Use spaces to fill in the gaps between words.
  Each line should contain as many words as possible.
  Use '\n' to separate lines.
  Gap between words can't differ by more than one space.
  Lines should end with a word not a space.
  '\n' is not included in the length of a line.
  Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
  Last line should not be justified, use only one space between words.
  Last line should not contain '\n'
  Strings with one word do not need gaps ('somelongword\n').


  Example with width=30:

  Lorem  ipsum  dolor  sit amet,
  consectetur  adipiscing  elit.
  Vestibulum    sagittis   dolor
  mauris,  at  elementum  ligula
  tempor  eget.  In quis rhoncus
  nunc,  at  aliquet orci. Fusce
  at   dolor   sit   amet  felis
  suscipit   tristique.   Nam  a
  imperdiet   tellus.  Nulla  eu
  vestibulum    urna.    Vivamus
  tincidunt  suscipit  enim, nec
  ultrices   nisi  volutpat  ac.
  Maecenas   sit   amet  lacinia
  arcu,  non dictum justo. Donec
  sed  quam  vel  risus faucibus
  euismod.  Suspendisse  rhoncus
  rhoncus  felis  at  fermentum.
  Donec lorem magna, ultricies a
  nunc    sit    amet,   blandit
  fringilla  nunc. In vestibulum
  velit    ac    felis   rhoncus
  pellentesque. Mauris at tellus
  enim.  Aliquam eleifend tempus
  dapibus. Pellentesque commodo,
  nisi    sit   amet   hendrerit
  fringilla,   ante  odio  porta
  lacus,   ut   elementum  justo
  nulla et dolor.
*/

function justify(text, width) {
    let ret = "";
    let tmp = [];
    for (const e of text.split(" ")) {
        if (tmp.join(" ").length + e.length < width) {
            tmp.push(e);        // only push to array when words joined is less than the width
        } else {
            ret += fillSpace(tmp, width);
            tmp = [e];
        }
    }
    if (tmp.length > 0)
        ret += tmp.join(" ");
    return ret;
}

function fillSpace(arr, width) {
    const diff = width - arr.join(" ").length;
    if (diff !== 0) {
        const maxLen = (arr.length - 1);    // exclude the last word
        for (let i = 0; i < diff; i++) {    // assign the space to each word
            arr[i % maxLen] += " ";
        }
    }
    return arr.join(" ") + "\n";
}
