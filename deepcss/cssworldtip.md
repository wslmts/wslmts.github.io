```
1. 外在盒子负责元素是可以一行显示，还是只能换行显示;内在盒子负责 宽高、内容呈现什么的。但是呢，造物主又想了想，叫“内在盒子”虽然容易理解，但是未免 有些俗气，难登大雅之堂，于是，又想了一个更专业的名称，叫作“容器盒子”。

2. 按照 display 的属性值不同，值为 block 的元素的盒子实际由外在的“块级盒子” 和内在的“块级容器盒子”组成，
   值为 inline-block 的元素则由外在的“内联盒子”和内 在的“块级容器盒子”组成，值为 inline 的元素则内外均是“内联盒子”

3. 设置 display:block 使其块状化绝对没有问 题，但后面的 width:100%就没有任何出现的必要了。
   为何要“无宽度”? 原因很简单，表现为“外部尺寸”的块级元素一旦设置了宽度，流动性就丢失了。
   所谓流动性，并不是看上去的宽度 100%显示这么简单，而是一种 margin/border/padding 和 content 内容区域自动分配水平空间的机制。  

4. !important 的权重比直接在元素的 style 属性中设置 CSS 声明还要高， 一般用在 CSS 覆盖 JavaScript 设置上。但是，就是这么厉害的!important，直接被 max-width 一 个浪头就拍沉了。比方说，针对下面的 HTML 和 CSS 设置，图片最后呈现的宽度是多少呢?
    <img src="1.jpg" style="width:480px!important;">
    img { max-width: 256px; }
答案是 256px。style、!important 通通靠边站!因为 max-width 会覆盖 width  

5. 替换元素的尺寸从内而外分为 3 类:固有尺寸、HTML 尺寸和 CSS 尺寸;
  固有尺寸指的是替换内容原本的尺寸。
  HTML 尺寸这个概念略微抽象，“HTML 尺寸”只能通过HTML 原生属性改变，这些 HTML 原生属性包括<img>的 width 和 height 属性、<input> 的 size 属性、<textarea>的 cols 和 rows 属性等。
  CSS 尺寸特指可以通过 CSS 的 width 和 height 或者 max-width/min-width 和 max-height/min-height 设置的尺寸，对应盒尺寸中的 content box。

  如果没有 CSS 尺寸和 HTML 尺寸，则使用固有尺寸作为最终的宽高。
  如果没有 CSS 尺寸，则使用 HTML 尺寸作为最终的宽高。
  如果有 CSS 尺寸，则最终尺寸由 CSS 属性决定。
  如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依 然按照固有的宽高比例显示。
  如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素，宽高比2:1,img例外；
  内联替换元素和块级替换元素使用上面同一套尺寸计算规则.



```