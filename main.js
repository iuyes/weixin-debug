function post() {
    $.ajax({
        url: 'index.php',
        type: 'post',
        data: '<xml><ToUserName><![CDATA[toUser]]></ToUserName><FromUserName><![CDATA[FromUser]]></FromUserName><CreateTime>123456789</CreateTime><MsgType><![CDATA[event]]></MsgType><Event><![CDATA[subscribe]]></Event></xml>',
        success: function(txt) {

        }
    });
}

function check() {
    var token = 'd3b18b877800a420cce4cdb9af894077';
    var nonce = '1806454635';
    var timestamp = '1421219611';

    console.log(new Hashes.SHA1().hex([token, timestamp, nonce].sort().join('')));
    console.log('98a9b04e97a998e53b3b8292ef4716f9f61774f7');
}