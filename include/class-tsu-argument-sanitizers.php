<?php
namespace tsumanagement\restAPI\include;

// Sanitizers for REST arguments
class TSU_Argument_Sanitizers
{

  /**
   * Sanitize number
   */
  public static function sanitizeNum($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }

    return floatval($param);
  }

  /**someoddpilot
   * Sanitize boolean
   */
  public static function sanitizeBoolean($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }

    return filter_var($param, FILTER_VALIDATE_BOOLEAN);
  }

  /**
   * Sanitize positive number
   */
  public static function sanitizeAbsVal($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }

    return absint(ArgumentSanitizers::sanitizeNum($param, $request, $key));
  }

  /**
   * Sanitize to an array
   */
  public static function sanitizeArray($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }

    if (!is_array($param)) {
      // Only a single issue was passed.
      // Make sure we always return an array
      return [$param];
    }

    return $param;
  }

  /**
   * Sanitize CSV to an array
   */
  public static function sanitizeCSVtoArray($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }

    return array_map('sanitize_text_field', explode(',', $param));
  }

  /**
   * Sanitize CSV to an array of numbers
   */
  public static function sanitizeCSVtoArrayOfNumbers($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }
    return array_map('floatval', explode(',', $param));
  }

  /**
   * Sanitize string to date used for ACF meta compare
   */
  public static function sanitizeDate($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }

    $safe_param = sanitize_text_field($param);

    // Elasticsearch requires Y-m-d
    return date('Y-m-d', strtotime($safe_param));
  }

  /**
   * Sanitize string to date/time used for ACF meta compare
   */
  public static function sanitizeDateTime($param, $request, $key) {
    if (!isset($param)) {
      return $param;
    }

    $safe_param = sanitize_text_field($param);

    // Elasticsearch requires Y-m-d H:i:s
    return date('Y-m-d H:i:s', strtotime($safe_param));
  }
}
