(function($) {
	$(document).ready(function() {
		$('#jm-signup-cf-items').on('click', '.jm-signup-cf-item-remove', function(event) {
			event.preventDefault();
			$(this).parents('.jm-signup-cf-item').remove();
		});

		$('#jm-signup-cf-item-add').click(function(event) {
			event.preventDefault();

			var item_new = $('#jm-signup-cf-item-new').clone().removeAttr('id').show();

			$('#jm-signup-cf-items').append(item_new);
		});


		$('#jm-signup-cf-items').on('keyup', '[data-jm-replace-in-others]', function(event) {
			event.preventDefault();

			var source = $(this);
			var target = source.attr('data-jm-replace-in-others');

	        var value = source.val();
	        value = value.toLowerCase();
	        value = value.replace(/[^a-zA-Z0-9]+/g,'-');

			source.parents('.jm-signup-cf-item').find('input, select').each(function( index ) {
				var name_base = $(this).attr('data-name-base');
				if (typeof name_base !== typeof undefined && name_base !== false) {
					$(this).attr('name', $(this).attr('data-name-base').replace(target, value));
				}
			});
		});

		$('#jm-signup-cf-items').on('change', '.jm-signup-cf-item-type', function(event) {
			event.preventDefault();

			if($(this).val() == 'select')
				$(this).parents('.jm-signup-cf-item').find('.jm-signup-cf-item-options-dropdown-options-holder').show();
			else
				$(this).parents('.jm-signup-cf-item').find('.jm-signup-cf-item-options-dropdown-options-holder').hide();
		});

		$('#jm-signup-cf-items').on('click', '.jm-signup-cf-item-options-dropdown-option-remove', function(event) {
			event.preventDefault();
			$(this).parents('.jm-signup-cf-item-options-dropdown-option').remove();
		});

		$('#jm-signup-cf-items').on('click', '.jm-signup-cf-item-options-dropdown-option-add', function(event) {
			event.preventDefault();

			var parent = $(this).parents('.jm-signup-cf-item-options-dropdown-options-holder');
			var item_new = parent.find('#jm-signup-cf-item-options-dropdown-option-new').clone().removeAttr('id').show();

			parent.find('.jm-signup-cf-item-options-dropdown-options').append(item_new);
		});
	});
})(jQuery);