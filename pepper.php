<?php

/**
 * @package PEPPER
 * @version 0.1.4
 */
/*
Plugin Name: PEPPER
Plugin URI: https://pepper.swat.io
Description: A friendly contact widget for your website! Easy to find, yet unobtrusive!
Author: Michael Kamleitner, Moritz Kobrna, Johannes Nagl, Martin Wessely
Version: 0.1.4
Author URI: https://pepper.swat.io
*/

add_action('wp_footer', 'pepperwidget_add_embed');

function pepperwidget_add_embed() {
  $options = get_option('pepperwidget_options');
  echo $options["embed"];
}

// add the admin options page
add_action('admin_menu', 'pepperwidget_admin_add_page');

function pepperwidget_admin_add_page() {
  add_options_page('Pepper', 'Pepper', 'manage_options', 'pepper', 'pepperwidget_options_page');
}

add_action('admin_init', 'pepperwidget_admin_init');

function pepperwidget_admin_init(){
  register_setting    ('pepperwidget_options', 'pepperwidget_options');
  add_settings_section('pepperwidget_main', '', 'pepperwidget_section_text', 'pepper');
  add_settings_field  ('pepperwidget_embed', '', 'pepperwidget_setting_embed', 'pepper', 'pepperwidget_main');
}

function pepperwidget_section_text() {
  ?>

<?php include plugin_dir_path(__FILE__)."pepper.html"; ?>
<script src="<?php echo plugin_dir_url(__FILE__); ?>pepper.js"></script>

  <?php
}

function pepperwidget_setting_embed() {
  $options = get_option('pepperwidget_options');
  echo "<textarea id='pepper_embed' name='pepperwidget_options[embed]' style='display:none; width: 500px;height:100px;'>{$options['embed']}</textarea>";
}

function pepperwidget_options_page() { ?>
  <div class="wrap">

  <form action="options.php" method="post">
  <?php settings_fields('pepperwidget_options'); ?>
  <?php do_settings_sections('pepper'); ?>
  <p class="submit" style="margin-left:120px;">
  <input type="submit" name="submit" id="submit" class="button-primary" style="font-size:32px;padding:5px 20px 5px 20px;height:50px;" value="<?php esc_attr_e('Save Changes'); ?>" />
  </p>
  </form>

  </div>
<?php }

function pepperwidget_scripts($hook){
  if ( 'settings_page_pepper' != $hook ) {
      return;
  }

  add_action( 'admin_print_scripts', 'pepperwidget_inline_js' );
  wp_enqueue_style('pepperwidget_css', plugin_dir_url(__FILE__).'pepper.css');
  wp_enqueue_script('pepperwidget_js', plugin_dir_url(__FILE__).'pepper.js', null, null, true);
  ?>
  <?php
}
add_action( 'admin_enqueue_scripts', 'pepperwidget_scripts' );

function pepperwidget_inline_js() {
  ?>
  <script>
  pluginURL = '<?php echo plugin_dir_url(__FILE__) ?>';
  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event)
  {
    var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the

    if (event.data.serializedConfiguration) {
      console.log(event.data.serializedConfiguration);
      var embed_code = '<script async src="https://pepper.swat.io/embed.js?'+event.data.serializedConfiguration;
      embed_code += '"></'+'script>';
      document.getElementById('pepper_embed').value = embed_code;
    }
  }
  </script>
  <?php
}
?>
