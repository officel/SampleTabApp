function AppTabGroup() {
	//declare module dependencies
	var AppWindow = require('ui/AppWindow');
	
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win_home    = new AppWindow(L('home')),
		win_setting = new AppWindow(L('settings'))
		win_list    = new AppWindow(L('list'))
		win_image   = new AppWindow(L('image'))
		;
	
	var tab_home = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win_home
	});
	win_home.containingTab = tab_home;
	
	var tab_setting = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win_setting
	});
	win_setting.containingTab = tab_setting;
	
	var tab_list = Ti.UI.createTab({
		title: L('list'),
		icon: '/images/KS_nav_ui.png',
		window: win_list
	});
	win_list.containingTab = tab_list;
	
	var tab_image = Ti.UI.createTab({
		title: L('image'),
		icon: '/images/KS_nav_views.png',
		window: win_image
	});
	win_image.containingTab = tab_image;
	
	self.addTab(tab_home);
	self.addTab(tab_setting);
	self.addTab(tab_list);
	self.addTab(tab_image);
	
	return self;
};

module.exports = AppTabGroup;
