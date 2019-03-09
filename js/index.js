// https://html5up.net/future-imperfect
$(document).ready(function(){
    var user_name = 'James Cardigan', 
        user_icon = 'https://az616578.vo.msecnd.net/files/2016/05/22/635994971002145818-1828178128_Hipster-326202.jpg'; // Set to users profile pic
    
    $('.user-icon').css('background','url("'+ user_icon +'") center no-repeat');
    
    //var image_array = ['https://images.unsplash.com/photo-1468645547353-56d325bb57ff?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb','https://images.unsplash.com/photo-1472461936147-645e2f311a2b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb','https://images.unsplash.com/photo-1469920783271-4ee08a94d42d?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1202&q=80&cs=tinysrgb','https://images.unsplash.com/photo-1471110338536-858caa3dbe45?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb']
    var image_array = ['https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/banana-banana-bread_8441.jpg','http://divascancook.com/wp-content/uploads/2013/09/IMG_1979_21.jpg','http://hotchocolatehits.com/wp-content/uploads/2015/03/banana-bread.jpg','http://www.gourmandize.com/uploads/media/banana-bread-2.jpg?1392422985'];
    
    //var post_array = ['https://images.unsplash.com/photo-1471922651044-1105732198fb?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=998&q=80&cs=tinysrgb','https://images.unsplash.com/photo-1456894332557-b03dc5cf60d5?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=844&q=80&cs=tinysrgb','https://images.unsplash.com/photo-1473800447596-01729482b8eb?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb'];
    var post_array = ['https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-horiz-a-1600.jpg','http://giantsandpilgrims.com/wp-content/uploads/2014/09/banana-bread-2-1024x685.jpg','http://img.sndimg.com/food/image/upload/q_92,fl_progressive/v1/img/recipes/28/86/wBZxNua1T8yfDwbfo9Fz_0S9A9315.jpg','https://perpetualfeast.files.wordpress.com/2008/08/banana-bread5.jpg','http://diabeticgourmet.com/recipes/images/2011-09-bananabread.jpg'];
    
    for(var i = 0; i < image_array.length; i++) {$('.side-tab-top').eq(i).css('background','url("'+ image_array[i] +'") center no-repeat');}
    for(var i = 0; i < post_array.length; i++) {$('.post-bottom-image').eq(i).css('background','url("'+ post_array[i] +'") center no-repeat');}
    for(var i = 0; i < post_array.length; i++) {$('.side-link-image').eq(i).css('background','url("'+ post_array[post_array.length - 1 - i] +'") center no-repeat');}

    $('.about-button').click(function(){window.open('http://lmgtfy.com/?q=banana+bread','_blank');})
    
})