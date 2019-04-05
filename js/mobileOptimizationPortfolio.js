$(window).ready(function(){
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var chevronBoundary = ((pageWidth / 2) - 14) + "px";
    $('.chevron').css('left', chevronBoundary );
    
    //We need the background element of the links to be at least 935px tall when fully extended. It needs to be 1250px tall when collapsed the first time and then 1000px when collapsed the second time.
    //1st collapse happens at  790 <= width < 1330. 
    //2nd collapse happens at width < 790
    var collapseDepth;
    if(pageWidth < 1330 && pageWidth >= 790) {
        collapseDepth = 1;
    } else if(pageWidth < 790){
        collapseDepth = 2;
    } else {
        collapseDepth = 0;
    }

    //Now that we know what collapse the page is on, we can customize each div based on that depth.

    //This is no collapse
    if(collapseDepth == 0){
        //This is when the grid system is all on one row.
        if(pageHeight < 935){
            //Set the height of the background to be 935px at all times here.
            $('#background').css('height','935px');
        } else {
            //if the page is greater than or equal to 935, just use the full height of the page.
            $('#background').css('height','100%');
        }
    }

    //This is one collapse
    if(collapseDepth == 1){
        if(pageHeight < 1250){
            //Set the background to 1250px
            $('#background').css('height','1250px');
        } else {
            //set the background to 100%
            $('#background').css('height','100%');
        }
    }


    //This is the second collapse
    if(collapseDepth == 2){
        if(pageHeight < 1000){
            //Set the background to 1000px
            $('#background').css('height','1000px');
        } else {
            //Set the background to 100%
            $('#background').css('height','100%');
        }
    }

    //Shrink the about section when the page is really short
    if(pageHeight < 1050){
        $('.aboutContainer').css('margin-top','50px');
        $('.aboutHeader').css('margin-top','95px');
        $('.aboutHeader').css('font-size','40px');
    } else {
        $('.aboutContainer').css('margin-top','100px');
        $('.aboutHeader').css('margin-top','200px');
        $('.aboutHeader').css('font-size','70px');
    }

    //Get rid of profile pic in about section if the page is too narrow and too short.
    if(pageWidth < 510 && pageHeight < 840){
        //Get rid of the pic here
        $('.leftSide img').css('width','0');
        $('.leftSide img').css('height','0');
    } else if(pageHeight > 840 || pageWidth > 510){
        $('.leftSide img').css('width','300px');
        $('.leftSide img').css('height','300px');
    }
});

$(window).on('resize', function(){
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var chevronBoundary = ((pageWidth / 2) - 14) + "px";
    $('.chevron').css('left', chevronBoundary );

    //We need the background element of the links to be at least 935px tall when fully extended. It needs to be 1250px tall when collapsed the first time and then 1000px when collapsed the second time.
    //1st collapse happens at  790 <= width < 1330. 
    //2nd collapse happens at width < 790
    var collapseDepth;
    if(pageWidth < 1330 && pageWidth >= 790) {
        collapseDepth = 1;
    } else if(pageWidth < 790){
        collapseDepth = 2;
    } else {
        collapseDepth = 0;
    }

    //Now that we know what collapse the page is on, we can customize each div based on that depth.

    //This is no collapse
    if(collapseDepth == 0){
        //This is when the grid system is all on one row.
        if(pageHeight < 935){
            //Set the height of the background to be 935px at all times here.
            $('#background').css('height','935px');
        } else {
            //if the page is greater than or equal to 935, just use the full height of the page.
            $('#background').css('height','100%');
        }
    }

    //This is one collapse
    if(collapseDepth == 1){
        if(pageHeight < 1250){
            //Set the background to 1250px
            $('#background').css('height','1250px');
        } else {
            //set the background to 100%
            $('#background').css('height','100%');
        }
    }


    //This is the second collapse
    if(collapseDepth == 2){
        if(pageHeight < 1000){
            //Set the background to 1000px
            $('#background').css('height','1000px');
        } else {
            //Set the background to 100%
            $('#background').css('height','100%');
        }
    }

    //Shrink the about section when the page is really short
    if(pageHeight < 1050){
        $('.aboutContainer').css('margin-top','50px');
        $('.aboutHeader').css('margin-top','95px');
        $('.aboutHeader').css('font-size','40px');
    } else {
        $('.aboutContainer').css('margin-top','100px');
        $('.aboutHeader').css('margin-top','200px');
        $('.aboutHeader').css('font-size','70px');
    }

    //Get rid of profile pic in about section if the page is too narrow and too short.
    if(pageWidth < 510 && pageHeight < 840 || pageHeight < 748){
        //Get rid of the pic here
        $('.leftSide img').css('width','0');
        $('.leftSide img').css('height','0');
    } else if(pageHeight > 840 || pageWidth > 510){
        $('.leftSide img').css('width','300px');
        $('.leftSide img').css('height','300px');
    }
});
