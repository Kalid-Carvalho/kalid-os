<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u450169090_qU0wc' );

/** Database username */
define( 'DB_USER', 'u450169090_ps7vD' );

/** Database password */
define( 'DB_PASSWORD', '1Gi1QmWUHw' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '2KZ*XkTzrt(O6v92$sLNd&m@RV!W9exG|N)V7.7*q{Tq(^%M6d1V%NQF6><.?+/!' );
define( 'SECURE_AUTH_KEY',   '{&<3S7HGr<LW?aFQ.[[b3[:}%&?h:gZyxOBl+QaOzt0Ik}V%OhYBa}[=-X}GDgyX' );
define( 'LOGGED_IN_KEY',     '1?L;(zPmhCW9+`-res9skNpo(;#j2PrWn;3e7=m(i^%lm1Il7so 2]5La>T,w2Q>' );
define( 'NONCE_KEY',         '%vBt)x$_;zsH/^!p7ulJ9;m;f6(O|U$jj]JJ<6U/~|@yFqrIhV%834Rksw:M)8aQ' );
define( 'AUTH_SALT',         'Kc0Y(;0d2TxR9Yj`VCV&s1P;;%l)cyv,dQ9PmRo1Cc_014xZgf)0pe&DO=w!D>N-' );
define( 'SECURE_AUTH_SALT',  '5[^xtG-G41jz+UajT*pd F2~;Gu5?Rv HGr6zR)@qnBnw@@ge%h[}O`k;VOm*lh#' );
define( 'LOGGED_IN_SALT',    'YfzdZb9iByKFhj}3!=j1@@_3MwdYzKG^$O5-@hDP`Oes!+k*H.6GjZ]CnWj={((t' );
define( 'NONCE_SALT',        '#%8N=oQ}XIyS,&dCj ~6&1AT)h?Q]a|!O=^CM;UCak;tarw0L59n`]px+Uf>[uzI' );
define( 'WP_CACHE_KEY_SALT', 'SI)z=zBUx|V6%QWsXnWkt)qMRI-=H7T?F+lyUW7/sUnAIfD`&go$Q)+#oI|^$ap:' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
