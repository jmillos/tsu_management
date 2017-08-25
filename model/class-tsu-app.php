<?php

class TSU_App {
	public static function get_meta($post, $field_name, $request) {
		// echo "<pre>"; var_dump($post, $field_name);die;
		return get_post_meta($post['id'], $field_name, true);
	}

	public static function update_meta($value, $post, $field_name){
		// echo "<pre>META ";var_dump($value, $post, $field_name);die;
		return update_post_meta($post->ID, $field_name, strip_tags($value));
	}
}