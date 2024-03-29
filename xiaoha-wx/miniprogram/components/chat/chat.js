let msgStorage = require("msgstorage");
let msgType = require("msgtype");
let WebIM = require("../../utils/WebIM")["default"];
Component({
	properties: {
		username: {
			type: Object,
			value: {},
		},
		chatType: {
			type: String,
			value: msgType.chatType.SINGLE_CHAT,
		},
	},
	data: {
		__comps__: {
			msglist: null,
			inputbar: null,
			audio: null,
		},
		pubUrl: '',
		subUrl: '',
		showEmedia: false,
		showmultiEmedia: false,
		showEmediaInvite: false,
		action: null,
		emediaAction: null,
		multiEmediaVisible: 'block',
		inputbarVisible: 'block',
		confrId: '',
		groupId: ''
	},
	methods: {
		toggleRecordModal(){
			this.data.__comps__.audio.toggleRecordModal();
		},

		normalScroll(){
			this.data.__comps__.msglist.normalScroll();
			this.data.__comps__.inputbar.cancelEmoji();
		},

		shortScroll(){
			this.data.__comps__.msglist.shortScroll();
		},

		saveSendMsg(evt){
			msgStorage.saveMsg(evt.detail.msg, evt.detail.type);
			this.data.__comps__.inputbar.cancelEmoji();
		},

		getMore(){
			this.selectComponent('#chat-msglist').getHistoryMsg()
		},

		onMakeVideoCall(){
			this.setData({
				showEmediaInvite: true,
				inputbarVisible: 'none',
				action: 'create'
				//showEmedia: true
			})
		},

		onStartConfr(data){
			this.setData({
				showEmediaInvite: false,
				showmultiEmedia: true,
				multiEmediaVisible: 'block',
				inputbarVisible: 'none',
				confrMember: data.detail.confrMember,
				emediaAction:{
					action: 'create'
				}
			})
			if(data.detail.action == 'invite'){
				this.sendInviteMsg(data.detail.confrMember, getApp().globalData.confrId)
			}
		},

		onGoBack(){
			this.setData({
				showEmediaInvite: false,
				showmultiEmedia: true,
				multiEmediaVisible: 'block',
				inputbarVisible: 'none',
				confrMember: []
			})
		},

		onInviteMember(){
			this.setData({
				action: 'invite',
				showEmediaInvite: true,
				inputbarVisible: 'none',
				//showmultiEmedia: false
				multiEmediaVisible: 'none'
			})
		},

		onMakeAudioCall(){
			this.setData({
				showEmediaInvite: true,
				showmultiEmedia: false,
				inputbarVisible: 'none'
			})
		},

		onCreateConfrSuccess(data){
			this.setData({
				confrId: data.detail.confrId
			})
			getApp().globalData.confrId = data.detail.confrId
   			this.sendInviteMsg(this.data.confrMember, data.detail.confrId, data)
		},

		sendInviteMsg(members, confrId, data){
			members&&members.forEach((value) => {
				let id = WebIM.conn.getUniqueId();
				let msg = new WebIM.message('txt', id);

				msg.set({
					msg: wx.WebIM.conn.context.userId + ' invite you to video call',
					from: wx.WebIM.conn.context.userId,
					to: value,
					roomType: false,
					chatType: 'chat',
					ext: {
						msg_extension: JSON.stringify({
							inviter: wx.WebIM.conn.context.userId,
							group_id: this.data.username.groupId
						}),
						roomName: data&&data.detail.roomName || '',
						password: data&&data.detail.password || '',
						conferenceId: confrId
					},
					success(id, serverMsgId){
					},
					fail(id, serverMsgId){
						console.log('发送邀请消息失败了')
					}
				});
				WebIM.conn.send(msg.body);

			})
		},

		onClickInviteMsg(data){
			// console.log(data)
			let confrId = data.detail.conferenceId
			let msg_extension = typeof(data.detail.msg_extension) == 'string'?JSON.parse(data.detail.msg_extension):data.detail.msg_extension
			let password = data.detail.password || ''
			this.setData({
				emediaAction: {
					action: 'join',
					confrId: confrId,
					password: password,
					roomName: data.detail.roomName || ''
				},
				showEmediaInvite: false,
				showmultiEmedia: true,
				inputbarVisible: 'none',
				groupId: msg_extension.group_id
				// username: {
				// 	groupId: msg_extension.group_id
				// }
			})
		},
		onHangup(){
			this.setData({
				showEmediaInvite: false,
				showmultiEmedia: false,
				inputbarVisible: 'block'
			})
			getApp().globalData.confrId = ''
		},
		onRender(){
			wx.pageScrollTo({
				scrollTop: 5000,
				duration: 300,
				success: function(){console.log('滚动成功')},
				fail: function(){console.log('滚动失败')}
			})
		}
  	},

	// lifetimes
	created(){},
	attached(){},
	ready(){
		this.data.__comps__.inputbar = this.selectComponent("#chat-inputbar");
		this.data.__comps__.msglist = this.selectComponent("#chat-msglist");
		this.data.__comps__.audio = this.selectComponent("#chat-suit-audio");
	},
	moved(){},
	detached(){
	},

});
