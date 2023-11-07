(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{307:function(n,a,s){"use strict";s.r(a);var e=s(14),t=Object(e.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")]),n._v(" /")]),n._v(" "),a("h4",{attrs:{id:"_1、什么是装箱、拆箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是装箱、拆箱"}},[n._v("#")]),n._v(" 1、什么是装箱、拆箱")]),n._v(" "),a("blockquote",[a("p",[n._v("装箱是一种封装，是一种设计模式，可称为“装箱模式”。")])]),n._v(" "),a("p",[n._v("装箱指基础类型（int、double等）转换为包装类型（Integer、Double等）的过程。"),a("br"),n._v("拆箱指从包装类型转换为基础类型的过程。"),a("br"),n._v("自动装箱的源码："),a("code",[n._v("Integer.valueOf")]),n._v("。（见字节码）"),a("br"),n._v("自动拆箱的源码："),a("code",[n._v("Integer.intValue")]),n._v("。（见字节码）")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class Test {\n    public static void main(String[] args) {\n        //装箱\n        Integer integer = new Integer(1);\n        Integer integer1 = Integer.valueOf(1);\n        Integer integer2 = 1;\n        //拆箱\n        int i = integer.intValue();\n        int i1 = integer;\n\n        //装箱\n        Boolean aBoolean = new Boolean(true);\n        Boolean aBoolean1 = Boolean.valueOf(true);\n        Boolean aBoolean2 = true;\n        //拆箱\n        boolean b = aBoolean.booleanValue();\n        boolean b1 = aBoolean;\n\n        //boolean Boolean\n        //byte Byte\n        //short Short\n        //char Character\n        //int Integer\n        //long Long\n        //float Float\n        //double Double\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class Test1 {\n    void test(){\n        Integer i = 1;\n        int j = i;\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  void test();\n    descriptor: ()V\n    flags:\n    Code:\n      stack=1, locals=3, args_size=1\n         0: iconst_1\n         1: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n         4: astore_1\n         5: aload_1\n         6: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n         9: istore_2\n        10: return\n      LineNumberTable:\n        line 9: 0\n        line 10: 5\n        line 11: 10\n      LocalVariableTable:\n        Start  Length  Slot  Name   Signature\n            0      11     0  this   Ltemp/Test1;\n            5       6     1     i   Ljava/lang/Integer;\n           10       1     2     j   I\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("h4",{attrs:{id:"_2、使用泛型表达一个任意类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用泛型表达一个任意类型"}},[n._v("#")]),n._v(" 2、使用泛型表达一个任意类型")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class Node<T> {\n    T val;\n    Node<T> pre;\n    Node<T> next;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h4",{attrs:{id:"_3、包装类型与object类型的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、包装类型与object类型的区别"}},[n._v("#")]),n._v(" 3、包装类型与Object类型的区别？")]),n._v(" "),a("p",[n._v("（1）装箱的过程中，"),a("code",[n._v("Object类型")]),n._v("与"),a("code",[n._v("包装类型")]),n._v("是一样的。"),a("br"),n._v("（2）拆箱的过程中，"),a("code",[n._v("Object类型")]),n._v("比"),a("code",[n._v("包装类型")]),n._v("多做一次"),a("code",[n._v("类型转换检查")]),n._v("。（注意："),a("code",[n._v("强制类型转换")]),n._v("是一次"),a("code",[n._v("类型转换检查")]),n._v("。）"),a("br"),a("img",{attrs:{src:"https://jiq-picture.yuxing138.top/615c4b357f0d00db995798897574b230/1699284565752-0b144098-c628-4c93-8706-6dc02deda21a.png#averageHue=%23f8f7f7&clientId=ud3324315-7770-4&from=paste&height=364&id=GV2fn&originHeight=1594&originWidth=2626&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=323312&status=done&style=none&taskId=ubcc17423-278c-4f3f-bcc2-3af3a8372f3&title=&width=600",alt:"image.png"}})]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class Test1 {\n    void test(){\n        Integer i = 1;\n        int j = i;\n        Object k = 1;\n        int l = (int) k;\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  void test();\n    descriptor: ()V\n    flags:\n    Code:\n      stack=1, locals=5, args_size=1\n         0: iconst_1\n         1: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n         4: astore_1\n         5: aload_1\n         6: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n         9: istore_2\n        10: iconst_1\n        11: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n        14: astore_3\n        15: aload_3\n        16: checkcast     #4                  // class java/lang/Integer\n        19: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n        22: istore        4\n        24: return\n      LineNumberTable:\n        line 9: 0\n        line 10: 5\n        line 11: 10\n        line 12: 15\n        line 13: 24\n      LocalVariableTable:\n        Start  Length  Slot  Name   Signature\n            0      25     0  this   Ltemp/Test1;\n            5      20     1     i   Ljava/lang/Integer;\n           10      15     2     j   I\n           15      10     3     k   Ljava/lang/Object;\n           24       1     4     l   I\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br")])]),a("h4",{attrs:{id:"_4、泛型与object类型的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、泛型与object类型的区别"}},[n._v("#")]),n._v(" 4、泛型与Object类型的区别？")]),n._v(" "),a("p",[n._v("（1）泛型其实是Object类型。（注意：传参的过程中，会自动装箱。）"),a("br"),n._v("（2）装箱、拆箱：泛型与Object类型一样。（见字节码）"),a("br"),a("img",{attrs:{src:"https://jiq-picture.yuxing138.top/615c4b357f0d00db995798897574b230/1699288612286-b0edc30c-d08d-4ae9-861b-7f8d4982bc1c.png#averageHue=%23f7f6f6&clientId=ud3324315-7770-4&from=paste&height=293&id=u10c279f2&originHeight=1203&originWidth=2464&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=287866&status=done&style=none&taskId=u5369bf4f-f443-4ab6-9174-40657df174a&title=&width=600",alt:"image.png"}}),a("br"),a("img",{attrs:{src:"https://jiq-picture.yuxing138.top/615c4b357f0d00db995798897574b230/1699287168467-097a61d3-a562-4382-9b48-fe6dd5b35677.png#averageHue=%23f7f5f5&clientId=ud3324315-7770-4&from=paste&height=332&id=ue127626d&originHeight=1388&originWidth=3759&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=540730&status=done&style=none&taskId=uee38c1a2-ddc2-4d37-bc16-d091005759d&title=&width=900",alt:"image.png"}})]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class Test1<T> {\n    void test(T t){\n        Integer i = 1;\n        int j = i;\n\n        Object k = 1;\n        int l = (int) k;//类型转换+拆箱\n\n        T a = t;\n        int b = (Integer) a;//类型转换+拆箱\n\n        Integer c = (Integer) t;//类型转换\n        int d = c;//类型转换+拆箱（字节码中没有再做一次类型转换，直接拆箱）\n\n        //int e = (int) t;//不兼容的类型: T无法转换为int\n    }\n\n    public static void main(String[] args) {\n        Test1<Integer> test1 = new Test1<>();\n        test1.test(1);\n    }\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('  void test(T);\n    descriptor: (Ljava/lang/Object;)V\n    flags:\n    Code:\n      stack=1, locals=10, args_size=2\n         0: iconst_1\n         1: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n         4: astore_2\n         5: aload_2\n         6: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n         9: istore_3\n        10: iconst_1\n        11: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n        14: astore        4\n        16: aload         4\n        18: checkcast     #4                  // class java/lang/Integer\n        21: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n        24: istore        5\n        26: aload_1\n        27: astore        6\n        29: aload         6\n        31: checkcast     #4                  // class java/lang/Integer\n        34: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n        37: istore        7\n        39: aload_1\n        40: checkcast     #4                  // class java/lang/Integer\n        43: astore        8\n        45: aload         8\n        47: invokevirtual #3                  // Method java/lang/Integer.intValue:()I\n        50: istore        9\n        52: return\n      LineNumberTable:\n        line 9: 0\n        line 10: 5\n        line 12: 10\n        line 13: 16\n        line 15: 26\n        line 16: 29\n        line 18: 39\n        line 19: 45\n        line 20: 52\n      LocalVariableTable:\n        Start  Length  Slot  Name   Signature\n            0      53     0  this   Ltemp/Test1;\n            0      53     1     t   Ljava/lang/Object;\n            5      48     2     i   Ljava/lang/Integer;\n           10      43     3     j   I\n           16      37     4     k   Ljava/lang/Object;\n           26      27     5     l   I\n           29      24     6     a   Ljava/lang/Object;\n           39      14     7     b   I\n           45       8     8     c   Ljava/lang/Integer;\n           52       1     9     d   I\n      LocalVariableTypeTable:\n        Start  Length  Slot  Name   Signature\n            0      53     0  this   Ltemp/Test1<TT;>;\n            0      53     1     t   TT;\n           29      24     6     a   TT;\n    Signature: #34                          // (TT;)V\n\n  public static void main(java.lang.String[]);\n    descriptor: ([Ljava/lang/String;)V\n    flags: ACC_PUBLIC, ACC_STATIC\n    Code:\n      stack=2, locals=2, args_size=1\n         0: new           #5                  // class temp/Test1\n         3: dup\n         4: invokespecial #6                  // Method "<init>":()V\n         7: astore_1\n         8: aload_1\n         9: iconst_1\n        10: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n        13: invokevirtual #7                  // Method test:(Ljava/lang/Object;)V\n        16: return\n      LineNumberTable:\n        line 23: 0\n        line 24: 8\n        line 25: 16\n      LocalVariableTable:\n        Start  Length  Slot  Name   Signature\n            0      17     0  args   [Ljava/lang/String;\n            8       9     1 test1   Ltemp/Test1;\n      LocalVariableTypeTable:\n        Start  Length  Slot  Name   Signature\n            8       9     1 test1   Ltemp/Test1<Ljava/lang/Integer;>;\n}\nSignature: #41                          // <T:Ljava/lang/Object;>Ljava/lang/Object;\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br")])]),a("h4",{attrs:{id:"_5、泛型与object类型的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、泛型与object类型的区别"}},[n._v("#")]),n._v(" 5、泛型与Object类型的区别？")]),n._v(" "),a("p",[n._v("（1）装箱：泛型与Object类型一样。（见字节码）"),a("br"),n._v("（2）拆箱：泛型与Object类型一样。（见字节码）")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class Main {\n\n    public static void main(String[] args) {\n        Node<Integer> n1 = new Node<>();\n        NodeObject n2 = new NodeObject();\n\n        n1.val = 1;\n        n2.val = 2;\n\n        int a1 = n1.val;\n        int a2 = (int) n2.val;\n\n    }\n\n    static class Node<T> {\n        T val;\n        Node<T> pre;\n        Node<T> next;\n    }\n\n    static class NodeObject {\n        Object val;\n        NodeObject pre;\n        NodeObject next;\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('  public static void main(java.lang.String[]);\n    descriptor: ([Ljava/lang/String;)V\n    flags: ACC_PUBLIC, ACC_STATIC\n    Code:\n      stack=2, locals=5, args_size=1\n         0: new           #2                  // class Main$Node\n         3: dup\n         4: invokespecial #3                  // Method Main$Node."<init>":()V\n         7: astore_1\n         8: new           #4                  // class Main$NodeObject\n        11: dup\n        12: invokespecial #5                  // Method Main$NodeObject."<init>":()V\n        15: astore_2\n        16: aload_1\n        17: iconst_1\n        18: invokestatic  #6                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n        21: putfield      #7                  // Field Main$Node.val:Ljava/lang/Object;\n        24: aload_2\n        25: iconst_2\n        26: invokestatic  #6                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n        29: putfield      #8                  // Field Main$NodeObject.val:Ljava/lang/Object;\n        32: aload_1\n        33: getfield      #7                  // Field Main$Node.val:Ljava/lang/Object;\n        36: checkcast     #9                  // class java/lang/Integer\n        39: invokevirtual #10                 // Method java/lang/Integer.intValue:()I\n        42: istore_3\n        43: aload_2\n        44: getfield      #8                  // Field Main$NodeObject.val:Ljava/lang/Object;\n        47: checkcast     #9                  // class java/lang/Integer\n        50: invokevirtual #10                 // Method java/lang/Integer.intValue:()I\n        53: istore        4\n        55: return\n      LineNumberTable:\n        line 4: 0\n        line 5: 8\n        line 7: 16\n        line 8: 24\n        line 10: 32\n        line 11: 43\n        line 13: 55\n      LocalVariableTable:\n        Start  Length  Slot  Name   Signature\n            0      56     0  args   [Ljava/lang/String;\n            8      48     1    n1   LMain$Node;\n           16      40     2    n2   LMain$NodeObject;\n           43      13     3    a1   I\n           55       1     4    a2   I\n      LocalVariableTypeTable:\n        Start  Length  Slot  Name   Signature\n            8      48     1    n1   LMain$Node<Ljava/lang/Integer;>;\n}\nSourceFile: "Main.java"\nInnerClasses:\n     static #13= #4 of #11; //NodeObject=class Main$NodeObject of class Main\n     static #15= #2 of #11; //Node=class Main$Node of class Main\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);