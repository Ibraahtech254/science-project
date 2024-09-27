

const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const BaseUrl = 'https://api-gifted-tech.onrender.com';
const giftedapikey = 'ibrahimtech_ai';
//const adam = 'prabath-api_5f6557';
/**
adams({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;
//repondre(videoUrl)

      
      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`https://prabath-md-api.up.railway.app/api/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=prabath-api_9d4fdb`);
      const apiResult = await apiResponse.json();

        const videoDlUrl = apiResult.data.video["360p"].downloadUrl;


        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW-MD VIDEO PLAYER*\n\n*©Ibrahim Adams*`

        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre(`*Video Details*\n\n*Video Owner:* ${videos[0].author.name}\n\n*Time:* ${videos[0].timestamp}\n\n*®Adams 2024*`);
      
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.' + error);
  }
});


adams({
  nomCom: "video2",
  categorie: "Search",
  reaction: "🎬"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`https://prabath-md-api.up.railway.app/api/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=prabath-api_9d4fdb`);
      const apiResult = await apiResponse.json();

        const videoDlUrl = apiResult.data.video["360p"].downloadUrl;

        // Prepare the message with video details
        const infoMess = {
          video: { url: videos[0].thumbnail },
          caption: `*BMW-MD VIDEO PLAYER*\n\n*©Ibrahim Adams*`

        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a URL instead of buffer
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre(`*Video Details*\n\n*Video Owner:* ${videos[0].author.name}\n\n*Time:* ${videos[0].timestamp}\n\n*®Adams 2024*`);
      
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});
**/
zokou({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();


      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `YOUTUBE SEARCH\n\n ©Mac Tech`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4',
          
        }, { quoted: ms });

        repondre('Downloded Successfully ✅');
     } else {
        repondre('Searching...⏳');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('Searching...⏳');
  }
});

zokou({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `YOUTUBE SEARCH\n\n ©Mac Tech`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre('*Downloded Successfully ✅*');
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

zokou({
  nomCom: "song",
  categorie: "Download",
  reaction: "🎸"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `YOUTUBE SEARCH\n\n ©Mac Tech`
       
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre('*Downloded Successfully ✅*');
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});


/**
const _0x51ea0c=_0x3e02;(function(_0x49d16a,_0x12b00b){const _0x4b79bd=_0x3e02,_0x3c8fc0=_0x49d16a();while(!![]){try{const _0x204e00=-parseInt(_0x4b79bd(0xe3))/0x1*(-parseInt(_0x4b79bd(0xc9))/0x2)+parseInt(_0x4b79bd(0xcd))/0x3+parseInt(_0x4b79bd(0xbf))/0x4*(parseInt(_0x4b79bd(0xe4))/0x5)+-parseInt(_0x4b79bd(0xbd))/0x6+-parseInt(_0x4b79bd(0xc5))/0x7+-parseInt(_0x4b79bd(0xd1))/0x8+parseInt(_0x4b79bd(0xc1))/0x9*(parseInt(_0x4b79bd(0xd8))/0xa);if(_0x204e00===_0x12b00b)break;else _0x3c8fc0['push'](_0x3c8fc0['shift']());}catch(_0x3ca4cf){_0x3c8fc0['push'](_0x3c8fc0['shift']());}}}(_0x354e,0x86e87));const {zokou}=require('../framework/zokou'),yts=require(_0x51ea0c(0xe2));function _0x3e02(_0x10a88e,_0x49f167){const _0x354e5c=_0x354e();return _0x3e02=function(_0x3e0265,_0x41fe2e){_0x3e0265=_0x3e0265-0xbd;let _0x3eef39=_0x354e5c[_0x3e0265];return _0x3eef39;},_0x3e02(_0x10a88e,_0x49f167);}zokou({'nomCom':_0x51ea0c(0xd2),'categorie':'Search','reaction':'🎧'},async(_0x4f572d,_0x2833a1,_0x55f751)=>{const _0x16b9a5=_0x51ea0c,{ms:_0x55172d,repondre:_0x189ba0,arg:_0x242f24}=_0x55f751;if(!_0x242f24[0x0]){_0x189ba0(_0x16b9a5(0xcf));return;}try{let _0x35214c=_0x242f24[_0x16b9a5(0xdd)]('\x20'),_0x3bdb29=[];const _0x5044e3=await yts(_0x35214c);_0x3bdb29=_0x5044e3[_0x16b9a5(0xd3)];if(_0x3bdb29&&_0x3bdb29[_0x16b9a5(0xcb)]>0x0){const _0x46bf1e=_0x3bdb29[0x0]['url'],_0x1bf5e0=await fetch(_0x16b9a5(0xde)+encodeURIComponent(_0x46bf1e)+_0x16b9a5(0xd4)+_0x16b9a5(0xe0)),_0x483522=await _0x1bf5e0['json']();if(_0x483522['status']===0xc8&&_0x483522[_0x16b9a5(0xdb)]){const _0x55281d=_0x483522['result']['download_url'],_0x46e7ac={'image':{'url':_0x3bdb29[0x0][_0x16b9a5(0xbe)]},'caption':_0x16b9a5(0xd6)};await _0x2833a1[_0x16b9a5(0xc7)](_0x4f572d,_0x46e7ac,{'quoted':_0x55172d}),await _0x2833a1[_0x16b9a5(0xc7)](_0x4f572d,{'audio':{'url':_0x55281d},'mimetype':_0x16b9a5(0xc6)},{'quoted':_0x55172d}),_0x189ba0(_0x16b9a5(0xda));}else _0x189ba0('Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.');}else _0x189ba0(_0x16b9a5(0xdc));}catch(_0x3b1116){console['error'](_0x16b9a5(0xd0),_0x3b1116),_0x189ba0(_0x16b9a5(0xe5));}}),zokou({'nomCom':'song','categorie':_0x51ea0c(0xd7),'reaction':'🎸'},async(_0x44c45d,_0x15d220,_0x1421e2)=>{const _0x35e67c=_0x51ea0c,{ms:_0x4bcb02,repondre:_0x588ba3,arg:_0x5b120d}=_0x1421e2;if(!_0x5b120d[0x0]){_0x588ba3(_0x35e67c(0xcf));return;}try{let _0x10a532=_0x5b120d[_0x35e67c(0xdd)]('\x20'),_0xac9a7d=[];const _0x18ff60=await yts(_0x10a532);_0xac9a7d=_0x18ff60[_0x35e67c(0xd3)];if(_0xac9a7d&&_0xac9a7d[_0x35e67c(0xcb)]>0x0){const _0x2e6e77=_0xac9a7d[0x0][_0x35e67c(0xce)],_0x5d517e=await fetch('https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url='+encodeURIComponent(_0x2e6e77)+_0x35e67c(0xd4)+_0x35e67c(0xe0)),_0x5cccb3=await _0x5d517e[_0x35e67c(0xc0)]();if(_0x5cccb3[_0x35e67c(0xd9)]===0xc8&&_0x5cccb3[_0x35e67c(0xdb)]){const _0x2849a4=_0x5cccb3['result'][_0x35e67c(0xe1)],_0x4f754a={'image':{'url':_0xac9a7d[0x0]['thumbnail']},'caption':_0x35e67c(0xd6)};await _0x15d220[_0x35e67c(0xc7)](_0x44c45d,_0x4f754a,{'quoted':_0x4bcb02}),await _0x15d220[_0x35e67c(0xc7)](_0x44c45d,{'document':{'url':_0x2849a4},'mimetype':_0x35e67c(0xd5)},{'quoted':_0x4bcb02}),_0x588ba3('Downloaded\x20Successfully...');}else _0x588ba3(_0x35e67c(0xc4));}else _0x588ba3('No\x20audio\x20found.');}catch(_0x5a2e10){console[_0x35e67c(0xca)](_0x35e67c(0xd0),_0x5a2e10),_0x588ba3(_0x35e67c(0xe5));}}),zokou({'nomCom':'video','categorie':_0x51ea0c(0xd7),'reaction':'🎥'},async(_0x4a334f,_0x4e7651,_0x67417a)=>{const _0xb10e82=_0x51ea0c,{ms:_0xeeee49,repondre:_0x214a11,arg:_0x26ba71}=_0x67417a;if(!_0x26ba71[0x0]){_0x214a11(_0xb10e82(0xc2));return;}try{let _0x45c86a=_0x26ba71['join']('\x20'),_0xf6557=[];const _0x544449=await yts(_0x45c86a);_0xf6557=_0x544449[_0xb10e82(0xd3)];if(_0xf6557&&_0xf6557[_0xb10e82(0xcb)]>0x0){const _0x4f61fd=_0xf6557[0x0][_0xb10e82(0xce)],_0x3c7428=await fetch('https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp4?url='+encodeURIComponent(_0x4f61fd)+_0xb10e82(0xd4)+_0xb10e82(0xe0)),_0x239589=await _0x3c7428[_0xb10e82(0xc0)]();if(_0x239589[_0xb10e82(0xd9)]===0xc8&&_0x239589['success']){const _0x5a44a4=_0x239589[_0xb10e82(0xcc)][_0xb10e82(0xe1)],_0x2ec297={'image':{'url':_0xf6557[0x0][_0xb10e82(0xbe)]},'caption':_0xb10e82(0xe6)};await _0x4e7651[_0xb10e82(0xc7)](_0x4a334f,_0x2ec297,{'quoted':_0xeeee49}),await _0x4e7651[_0xb10e82(0xc7)](_0x4a334f,{'video':{'url':_0x5a44a4},'mimetype':_0xb10e82(0xc8)},{'quoted':_0xeeee49}),_0x214a11('Downloaded\x20Successfully...');}else _0x214a11(_0xb10e82(0xc3));}else _0x214a11(_0xb10e82(0xdf));}catch(_0x38155a){console['error'](_0xb10e82(0xd0),_0x38155a),_0x214a11(_0xb10e82(0xe7));}});function _0x354e(){const _0x30bc62=['thumbnail','12ETnhUw','json','888417SJhxaA','Please\x20insert\x20a\x20song/video\x20name.','Failed\x20to\x20download\x20the\x20video.\x20Please\x20try\x20again\x20later.','Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.','3872764xOiZpY','audio/mp4','sendMessage','video/mp4','342iXKQOO','error','length','result','1259955GSxKBB','url','Please\x20insert\x20a\x20song\x20name.','Error\x20from\x20API:','7767656yMlKee','play','videos','&apikey=','audio/mpeg','*BMW-MD\x20SONG\x20PLAYER*','Search','80KCROZS','status','Downloaded\x20Successfully...','success','No\x20audio\x20found.','join','https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=','No\x20videos\x20found.','giftedtechk','download_url','yt-search','3659BKzvqr','866635gmFCoM','An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20audio.','*BMW-MD\x20VIDEO\x20PLAYER*','An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20video.','1671402LsPaOD'];_0x354e=function(){return _0x30bc62;};return _0x354e();}

/**
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '🎧'
}, async (_0x331cb3, _0x5ed62b, _0x29cdd3) => {
  const {
    ms: _0x289345,
    repondre: _0x19cdef,
    arg: _0x225777
  } = _0x29cdd3;
  if (!_0x225777[0]) {
    _0x19cdef("Please insert a song name.");
    return;
  }
  try {
    let _0x427bd8 = _0x225777.join(" ");
    let _0x314dd5 = [];
    const _0x51b8e0 = await yts(_0x427bd8);
    _0x314dd5 = _0x51b8e0.videos;
    if (_0x314dd5 && _0x314dd5.length > 0) {
      const _0x48db1a = _0x314dd5[0].url;
      const _0x336852 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x48db1a) + "&apikey=" + "giftedtechk");
      const _0x7c7652 = await _0x336852.json();
      if (_0x7c7652.status === 200 && _0x7c7652.success) {
        const _0x181eae = _0x7c7652.result.download_url;
        const _0x2a6b56 = {
          'image': {
            'url': _0x314dd5[0].thumbnail
          },
          'caption': "*BMW-MD SONG PLAYER*"
        };
        await _0x5ed62b.sendMessage(_0x331cb3, _0x2a6b56, {
          'quoted': _0x289345
        });
        await _0x5ed62b.sendMessage(_0x331cb3, {
          'audio': {
            'url': _0x181eae
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x289345
        });
        _0x19cdef("Downloaded Successfully...");
      } else {
        _0x19cdef("Failed to download audio. Please try again later.");
      }
    } else {
      _0x19cdef("No audio found.");
    }
  } catch (_0x2d1cdc) {
    console.error("Error from API:", _0x2d1cdc);
    _0x19cdef("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '🎸'
}, async (_0x230f93, _0x194dfe, _0x220b24) => {
  const {
    ms: _0x33d811,
    repondre: _0x5ed249,
    arg: _0x19155c
  } = _0x220b24;
  if (!_0x19155c[0]) {
    _0x5ed249("Please insert a song name.");
    return;
  }
  try {
    let _0x2cc67e = _0x19155c.join(" ");
    let _0x25c73a = [];
    const _0x389cf0 = await yts(_0x2cc67e);
    _0x25c73a = _0x389cf0.videos;
    if (_0x25c73a && _0x25c73a.length > 0) {
      const _0x273c8f = _0x25c73a[0].url;
      const _0x33a1c5 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x273c8f) + "&apikey=" + "giftedtechk");
      const _0x2f9118 = await _0x33a1c5.json();
      if (_0x2f9118.status === 200 && _0x2f9118.success) {
        const _0x1714c1 = _0x2f9118.result.download_url;
        const _0xe02f75 = {
          'image': {
            'url': _0x25c73a[0].thumbnail
          },
          'caption': "*BMW-MD SONG PLAYER*"
        };
        await _0x194dfe.sendMessage(_0x230f93, _0xe02f75, {
          'quoted': _0x33d811
        });
        await _0x194dfe.sendMessage(_0x230f93, {
          'document': {
            'url': _0x1714c1
          },
          'mimetype': "audio/mpeg"
        }, {
          'quoted': _0x33d811
        });
        _0x5ed249("Downloaded Successfully...");
      } else {
        _0x5ed249("Failed to download audio. Please try again later.");
      }
    } else {
      _0x5ed249("No audio found.");
    }
  } catch (_0x5119e8) {
    console.error("Error from API:", _0x5119e8);
    _0x5ed249("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x417693, _0x38ae7a, _0x524708) => {
  const {
    ms: _0x3ab854,
    repondre: _0x5e07ab,
    arg: _0xfed1ce
  } = _0x524708;
  if (!_0xfed1ce[0]) {
    _0x5e07ab("Please insert a song/video name.");
    return;
  }
  try {
    let _0x1bc316 = _0xfed1ce.join(" ");
    let _0x1aaaa0 = [];
    const _0x52a0a5 = await yts(_0x1bc316);
    _0x1aaaa0 = _0x52a0a5.videos;
    if (_0x1aaaa0 && _0x1aaaa0.length > 0) {
      const _0x40e0d7 = _0x1aaaa0[0].url;
      const _0x1bb1dd = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp4?url=" + encodeURIComponent(_0x40e0d7) + "&apikey=" + "giftedtechk");
      const _0x8d13d2 = await _0x1bb1dd.json();
      if (_0x8d13d2.status === 200 && _0x8d13d2.success) {
        const _0x38a284 = _0x8d13d2.result.download_url;
        const _0x4bf970 = {
          'image': {
            'url': _0x1aaaa0[0].thumbnail
          },
          'caption': "*BMW-MD VIDEO PLAYER*"     };
        await _0x38ae7a.sendMessage(_0x417693, _0x4bf970, {
          'quoted': _0x3ab854
        });
        await _0x38ae7a.sendMessage(_0x417693, {
          'video': {
            'url': _0x38a284
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x3ab854
        });
        _0x5e07ab("Downloaded Successfully...");
      } else {
        _0x5e07ab("Failed to download the video. Please try again later.");
      }
    } else {
      _0x5e07ab("No videos found.");
    }
  } catch (_0x2a9235) {
    console.error("Error from API:", _0x2a9235);
    _0x5e07ab("An error occurred while searching or downloading the video.");
  }
});
**/
