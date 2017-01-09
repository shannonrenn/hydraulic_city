jQuery(document).ready( function($) {
	// console.log($('#adminmenu a[href="view_class_blog_redirect"]'));
	$('#adminmenu a[href="view_class_blog_redirect"]').attr('href', Classes.blog_url).attr('target','_blank');
});