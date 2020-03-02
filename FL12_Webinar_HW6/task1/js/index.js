// $("#someId").css({"prop" : "value", "prop1" : "value1", ...});

//body: add padding 20px
$("body").css("padding", 20);

// id title: make align center, remove top margin
$("#title").css({
  "text-align": "center",
  "margin-top": 0
});

// div after header: add double border and padding 20px
$("header + div").css({
  border: "10px double green",
  padding: 20
});

// change color for all h2 and set top margin to 0
$("h2").css({
  color: "blue",
  "margin-top": 0
});

// set font size 18px for all .list direct child
$(".list > *").css("font-size", 18);

// ******************************************************
// :even, :odd, :first, :last, :not(), :empty
// :gt() /* all elements at an index greater then specified */
// :lt() /* all elements at an index less then specified */
// :hidden /* display: none, type="hidden", width & height = 0, ancestor is hidden */
// :visible /* are visible */
// :parent /* are parents to other elements, including text node */
// :contains() /* contain the specified text */
// :has() /* contain at least one element that matches the specified selector */
// ******************************************************

// in #list-1
// show all hidden and not cloned li
$("#list-1 :not(.cloned)").show();

// hide empty li
$("#list-1 :empty").hide();

// in #list-3
// for all even li set margin-left -20px
$("#list-3 li:even").css("margin-left", -20);

// for the first li set any different color
$("#list-3 :first").css("color", "tomato");

// for all li with index > 5 set color to #ccc
$("#list-3 :gt(6)").css("color", "#ccc");

// show ul which is parent
$("ul:has('*')").css("border", "1px solid green");

// for li wich has 'em' add red color
$("li:has('em')").css("color", "red");

// for li which contains text 'Buratino' set font weight to bold
$("li:contains('Buratino')").css("font-weight", "bold");

// ******************************************************
// :first-child, :last-child, :only-child, :first-of-type, :last-of-type,
// :only-of-type, :nth-child(), :nth-last-child(), :nth-last-of-type(),
// :nth-of-type()
// ******************************************************

// for b in p which is the only child set font size 36px
$("p b:only-of-type").css("font-size", 36);

// for em in p which is the last child of type set color to green
$("p em:last-of-type").css("color", "green");

// ******************************************************
// [name], [name|='value'], [name*='value'], [name~='value'],
// [name$='value'], [name^='value']
// [name!='value'] /* neither such attribute nor specified value */
// ******************************************************

// set width 80px for input with attribute name ended by 'age'
$("input[name$='age']").css("width", 80);

// set width 120px for input with attribute name started by 'my'
$("input[name^='my']").css("width", 120);

// console.log checked checkbox
console.log($("input[checked]"));

// show all images with a cat
$("img[alt*='cat']").show();

// ******************************************************
// is(), not(), has()
// eq(), first(), last()
// find(), parent(), parents(), closest()
// children(), prev(), next(), siblings()
// ******************************************************

// for .mbox with index 3 set padding-top 50px
$(".mbox")
  .eq(3)
  .css("padding-top", 50);

// for first div wraper for img set float left and border red
$("img")
  .wrap("<div>")
  .first()
  .parent("div")
  .css({
    float: "left",
    border: "1px solid red"
  });
