<?php

// no direct access
defined('_JEXEC') or die;
if(!defined('DS')){
define( 'DS', DIRECTORY_SEPARATOR );
}

$slide = $this->params->get('slides');
$setPath = JURI::base(true).'/templates/mx_joomla185/slider/';
$document = JFactory::getDocument(); 
$trans = $this->params->get('trans');
$amaunts = $this->params->get('amaunts');
$aniclas = $this->params->get('aniclas');
$fullheight = $this->params->get('fullheight');
$bannerTime = $this->params->get('bannerTime');
$jqueryload = $this->params->get('jqueryload');
$slider_items    = $this->params->get('slider_items'); 
$slides          = $this->params->get('slides');
$shadows         = $this->params->get('shadows');
$headHeigh	     = $this->params->get('headHeigh');
$socialCode         = $this->params->get ('socialCode');
$mx_title            = $this->params->get('mx_title');
$mx_image            = $this->params->get('mx_image');
$mx_target_url       = $this->params->get('mx_target_url');
$mx_target           = $this->params->get('mx_target');

if($jqueryload) $document->addScript($setPath.'assets/js/jquery.min.js');
if($jqueryload) $document->addScript($setPath.'assets/js/jquery-noconflict.js');
$document->addStyleSheet($setPath.'assets/css/style.css');
if($bannerTime) $document->addStyleDeclaration('.tp-bannertimer	{	width:100%; height:5px; background:rgba(255,255,255,0.3);position:absolute; z-index:200;bottom:0px;}
.tp-bannertimer.tp-bottom{	bottom:0px;height:5px; top:auto;}
');

?>

<div id="slideshow" class="slideshow">
<div id='slider_wrapper' class='slider_wrapper fullwidthbanner-container' >
<div id='rev-slider' class='rev_slider fullwidthabanner'>
<ul>
<?php foreach ($slider_items as $item) : ?>
<li data-transition="<?php echo $item->trans; ?>" data-slotamount="<?php echo $item->amaunts; ?>" data-masterspeed="1000" data-title="'.$title.'" > <img src="<?php echo $item->mx_image; ?>"  alt="<?php echo $item->mx_title; ?>"  data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">
</li>
<?php endforeach; ?>
</ul>
</div>
</div>
</div>
<script type = "text/javascript" src = "<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/slider/assets/js/revslider.js"></script>	

<script type="text/javascript">
jQuery(document).ready(function(){
jQuery('#rev-slider').show().revolution({
dottedOverlay: 'none',
delay: 7000,
startwidth: 0,
startheight:400,

hideThumbs: 200,
thumbWidth: 200,
thumbHeight: 50,
thumbAmount: 2,

navigationType: 'none',
navigationArrows: 'verticalcentered',
navigationStyle: 'round',

touchenabled: 'on',
onHoverStop: 'on',

swipe_velocity: 0.7,
swipe_min_touches: 1,
swipe_max_touches: 1,
drag_block_vertical: false,

spinner: 'spinner0',
keyboardNavigation: 'on',

navigationHAlign: 'center',
navigationVAlign: 'bottom',
navigationHOffset: 0,
navigationVOffset: 20,

soloArrowLeftHalign: 'left',
soloArrowLeftValign: 'center',
soloArrowLeftHOffset: 20,
soloArrowLeftVOffset: 0,

soloArrowRightHalign: 'right',
soloArrowRightValign: 'center',
soloArrowRightHOffset: 20,
soloArrowRightVOffset: 0,

shadow:0,	
fullWidth: 'on',
fullScreen: 'on',

stopLoop: 'off',
stopAfterLoops: -1,
stopAtSlide: -1,

shuffle: 'off',

autoHeight: 'on',
forceFullWidth: 'off',
fullScreenAlignForce: 'off',
minFullScreenHeight: 0,
hideNavDelayOnMobile: 1500,

hideThumbsOnMobile: 'off',
hideBulletsOnMobile: 'off',
hideArrowsOnMobile: 'off',
hideThumbsUnderResolution: 0,

hideSliderAtLimit: 0,
hideCaptionAtLimit: 0,
hideAllCaptionAtLilmit: 0,
startWithSlide: 0,
fullScreenOffsetContainer: ''
});
});
</script>



