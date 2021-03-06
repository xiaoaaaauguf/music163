export default {
    navCurrentIndex:0,
    isLoad: false, //加载组件
    currentPlay: {  // 当前播放歌曲
        'id': 0,
        'url':'',
        'name': '歌曲名称',
        'singer': '演唱者',
        'albumPic': '', //音乐图片
        'location': '', //位置
        'album': '',    //专辑
    },
    playing: false,     // 播放状态
    songList:[],       //歌曲列表
    currentIndex:0,    //当前索引
    currentTime: 0,    //当前播放时长
    isNav:true
}