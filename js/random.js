var RANDOM_CSS = {
    cssfiles : ['1.css','2.css','3.css','4.css','5.css','6.css'],
    pathtocss : 'css/',
    getrandomcss : function() { return this.cssfiles[Math.floor(Math.random()*this.cssfiles.length)]; },
    getlinktag : function() { return '<link rel="stylesheet" type="text/css" href="'+this.pathtocss+this.getrandomcss()+'" />'; },
    printlinktag : function() { document.write(this.getlinktag()); }
  };

