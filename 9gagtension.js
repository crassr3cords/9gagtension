var memes = [
	{
	  matches: ['mother of god', 'mog', 'motherofgod'],
	  img: 'mother-of-god.jpg'
	},
	{
	  matches: ['me gusta', 'mg', 'megusta'],
	  img: 'me-gusta.jpg'
	},
	{
	  matches: ['cereal guy', 'cg', 'cerealguy'],
	  img: 'cereal-guy.jpg'
	},
	{
	  matches: ['fffu'],
	  img: 'fffu.jpg'
	},
	{
	  matches: ['forever alone', 'fa', 'foreveralone'],
	  img: 'forever-alone.jpg'
	},
	{
	  matches: ['fyeah', 'fuck yeah', 'fy', 'fuckyeah'],
	  img: 'fyeah.jpg'
	},
	{
	  matches: ['me gusta', 'mg', 'megusta'],
	  img: 'me-gusta.jpg'
	},
	{
	  matches: ['not bad', 'nb', 'notbad', 'obama'],
	  img: 'not-bad.jpg'
	},
	{
	  matches: ['okay', 'okay guy', 'og', 'okayguy'],
	  img: 'okay-guy.jpg'
	},
	{
	  matches: ['poker', 'pokerface', 'poker face', 'pk'],
	  img: 'poker.jpg'
	},
	{
	  matches: ['sweet jesus', 'sj', 'sweetjesus'],
	  img: 'sweet-jesus.jpg'
	},
	{
	  matches: ['troll', 'tf', 'troll face', 'trollface'],
	  img: 'troll.jpg'
	},
	{
	  matches: ['yao', 'bitch please', 'bitchplease', 'fuck that', 'yao ming', 'yaoming'],
	  img: 'yao.jpg'
	},
	{
	  matches: ['y u no', 'yuno'],
	  img: 'y-u-no-guy.jpg'
	}
];

function scan()
{
	$('.postText').each(
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
					console.log(re);
					console.log('before:'+$(this).html());
					$(this).html($(this).html().replace(re, '<img src="'+meme.img+'"/>'));
					console.log('after:'+$(this).html());
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