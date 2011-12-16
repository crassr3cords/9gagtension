function scan()
{
	$('.postText, #MessagingMessages .content, div.fbChatMessage').each(
		function()
		{
			var f = $(this).data('9Gprocessed');
			if(f == true) return;
			$(this).data('9Gprocessed', true);
			for(var m in memes)
			{
				var meme = memes[m];
				for(var r in meme.matches)
				{
					var re = meme.matches[r];
					var source = re.source;
					$(this).html($(this).html().replace(re, '<img src="'+meme.img+'" title="'+source+'"/>'));
				}
			}
		}
	)
}

$(document).ready(
	function()
	{
		console.log('9gagtension running');
		for(var m in memes)
		{
			var meme = memes[m];
			for(var i in meme.matches)
				meme.matches[i] = new RegExp(':'+meme.matches[i]+':', 'gim');
			meme.img = chrome.extension.getURL('rages/'+meme.img);
		}
		setInterval('scan()', 100);
	}
);