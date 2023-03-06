function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi Frontend kapsamında değildir?",
    {a : "HTML", b :"Javascript", c :"TypeScript", d : "Sql"},
    "d"),
    new Soru("2-Hangisi Javascripte ait bir terim değildir?",
    {a :"Document Object Model", b : "OOP",c : "Sytem.out.println()", d : "console.log()"},
    "c"),
    new Soru("3-Hangisi Nesne tabanlı demektir?",
    {a : "Document Object Model", b :"OOP", c :"Sytem.out.println()", d :"console.log()"},
    "b"),
    new Soru("4-Aşağıdakilerden hangisi bir programlama dili değildir?",
    {a : "Java", b : "c++", c : "HTML", d : "Python"},
    "c"),
    new Soru("5-OOP'nin açılımı nedir",
    { a : "Organic Operator Programming", b : "Objetct Orienetd Programming",c : "Object Only Programming", d :"Opera Oprimication Prime"},
    "b"),
   ];