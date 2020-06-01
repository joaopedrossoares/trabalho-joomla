CREATE TABLE IF NOT EXISTS `#__allvideoshare_players` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(25) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `ratio` DECIMAL(16,2) NOT NULL,
  `loop` TINYINT(4) NOT NULL,
  `autostart` TINYINT(4) NOT NULL,
  `buffer` INT(2) NOT NULL,
  `volumelevel` INT(2) NOT NULL,
  `stretch` VARCHAR(10) NOT NULL,
  `controlbar` TINYINT(4) NOT NULL,
  `playlist` TINYINT(4) NOT NULL,
  `durationdock` TINYINT(4) NOT NULL,
  `timerdock` TINYINT(4) NOT NULL,
  `fullscreendock` TINYINT(4) NOT NULL,
  `hddock` TINYINT(4) NOT NULL,  
  `embeddock` TINYINT(4) NOT NULL,
  `sharedock` TINYINT(4) NOT NULL,
  `facebookdock` TINYINT(4) NOT NULL,
  `twitterdock` TINYINT(4) NOT NULL,
  `controlbaroutlinecolor` VARCHAR(10) NOT NULL,
  `controlbarbgcolor` VARCHAR(10) NOT NULL,
  `controlbaroverlaycolor` VARCHAR(10) NOT NULL,
  `controlbaroverlayalpha` INT(3) NOT NULL,
  `iconcolor` VARCHAR(10) NOT NULL,
  `progressbarbgcolor` VARCHAR(10) NOT NULL,
  `progressbarbuffercolor` VARCHAR(10) NOT NULL,
  `progressbarseekcolor` VARCHAR(10) NOT NULL,
  `volumebarbgcolor` VARCHAR(10) NOT NULL,
  `volumebarseekcolor` VARCHAR(10) NOT NULL,
  `playlistbgcolor` VARCHAR(10) NOT NULL,
  `customplayerpage` VARCHAR(255) NOT NULL,
  `ad_engine` VARCHAR(10) NOT NULL,
  `preroll` TINYINT(4) NOT NULL,
  `postroll` TINYINT(4) NOT NULL, 
  `vast_url` TEXT NOT NULL,
  `vpaid_mode` VARCHAR(10) NOT NULL,
  `livestream_ad_interval` INT(10) NOT NULL,
  `published` TINYINT(4) NOT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `#__allvideoshare_categories` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `parent` INT(10) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `thumb` VARCHAR(255) NOT NULL,
  `access` VARCHAR(25) NOT NULL,
  `ordering` INT(5) NOT NULL,
  `metakeywords` TEXT NOT NULL,
  `metadescription` TEXT NOT NULL,
  `published` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `#__allvideoshare_videos` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `catid` INT(5) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `user` VARCHAR(255) NOT NULL,
  `type` VARCHAR(20) NOT NULL,
  `streamer` VARCHAR(255) NOT NULL,
  `dvr` TINYINT(4) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `video` VARCHAR(255) NOT NULL,
  `hd` VARCHAR(255) NOT NULL,
  `hls` VARCHAR(255) NOT NULL,  
  `thumb` VARCHAR(255) NOT NULL,
  `preview` VARCHAR(255) NOT NULL,
  `thirdparty` TEXT NOT NULL,  
  `featured` TINYINT(4) NOT NULL,
  `description` TEXT NOT NULL,  
  `tags` VARCHAR(255) NOT NULL,
  `metadescription` TEXT NOT NULL,
  `views` INT(5) NOT NULL,
  `access` VARCHAR(25) NOT NULL,
  `ordering` INT(5) NOT NULL,
  `published` TINYINT(4) NOT NULL,
  `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `#__allvideoshare_config` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,
  `rows` INT(3) NOT NULL,
  `cols` INT(3) NOT NULL,
  `image_ratio` DECIMAL(16,2) NOT NULL,
  `playerid` INT(10) NOT NULL,
  `layout` VARCHAR(30) NOT NULL,
  `relatedvideoslimit` INT(3) NOT NULL,
  `title` TINYINT(4) NOT NULL,
  `description` TINYINT(4) NOT NULL,
  `category` TINYINT(4) NOT NULL,
  `views` TINYINT(4) NOT NULL,
  `search` TINYINT(4) NOT NULL,
  `comments_type` VARCHAR(50) NOT NULL,
  `fbappid` VARCHAR(25) NOT NULL,
  `comments_posts` INT(3) NOT NULL,
  `comments_color` VARCHAR(20) NOT NULL,
  `auto_approval` TINYINT(4) NOT NULL,
  `type_youtube` TINYINT(4) NOT NULL,
  `type_vimeo` TINYINT(4) NOT NULL,
  `type_rtmp` TINYINT(4) NOT NULL,
  `type_hls` TINYINT(4) NOT NULL,
  `load_bootstrap_css` TINYINT(4) NOT NULL,
  `load_icomoon_font` TINYINT(4) NOT NULL,
  `custom_css` TEXT NOT NULL,
  `show_feed` TINYINT(4) NOT NULL,
  `feed_limit` INT(10) NOT NULL,
  `show_gdpr_consent` TINYINT(4) NOT NULL,
  `itemid_video` INT(5) NOT NULL,
  `is_premium` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `#__allvideoshare_licensing` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,  
  `licensekey` VARCHAR(50) NOT NULL,
  `type` VARCHAR(20) NOT NULL,
  `logo` VARCHAR(255) NOT NULL,
  `logoposition` VARCHAR(15) NOT NULL,
  `logoalpha` INT(3) NOT NULL,
  `logotarget` VARCHAR(255) NOT NULL,
  `displaylogo` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `#__allvideoshare_adverts` (
  `id` INT(5) NOT NULL AUTO_INCREMENT,  
  `title` VARCHAR(255) NOT NULL,
  `type` VARCHAR(25) NOT NULL,
  `method` VARCHAR(25) NOT NULL,
  `video` VARCHAR(255) NOT NULL,
  `link` VARCHAR(255) NOT NULL,
  `impressions` INT(10) NOT NULL,
  `clicks` INT(10) NOT NULL,
  `published` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;