"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 3.2.13.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-3risb5tqo%+@tgp@^+z3v2&*&15@figh7#6t4fpdty#chw!9d='

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'




# -----------------------------------------------------------------------------
# configuraciones personalizadas
# -----------------------------------------------------------------------------




import os
from django.utils.translation import gettext_lazy as _

BACKEND_DIR = Path(__file__).resolve().parent
LANGUAGE_CODE = 'es'
LANGUAGES = [
    ('es', _('Español')),
    ('en', _('Inglés')),
    ('fr', _('Francés')),
]
TIME_ZONE = 'Europe/Madrid'
AUTH_PASSWORD_VALIDATORS = []
MIDDLEWARE += [
    'django.middleware.locale.LocaleMiddleware',
]
LOCALE_PATHS = [BACKEND_DIR / 'locale',]
# TEMPLATES[0]['DIRS'] = [BACKEND_DIR / 'templates']
TEMPLATES[0]['DIRS'] = [
    os.path.join(BACKEND_DIR, 'templates'),
]
TEMPLATES[0]['OPTIONS']['context_processors'] += [
    'django.template.context_processors.i18n',
]
STATIC_URL       = os.path.join(BASE_DIR, 'static/')
STATIC_ROOT      = os.path.join(BACKEND_DIR, 'static/')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static/'),
]
MEDIA_URL        = '/media/'
MEDIA_ROOT       = os.path.join(BASE_DIR, 'media/')


# -----------------------------------------------------------------------------
# base de datos
# -----------------------------------------------------------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'HOST': 'localhost',
        'PORT': '5432',
        'NAME': 'dev_ceu',
        'USER': 'roberto',
        'PASSWORD': 'roberto',
    },
}


# -----------------------------------------------------------------------------
# djangoCMS
# -----------------------------------------------------------------------------
# antes de django.contrib.admin,
INSTALLED_APPS = [
    'djangocms_admin_style',
] + INSTALLED_APPS
INSTALLED_APPS += [
    'django.contrib.sites',
    'cms',
    'menus',
    'treebeard',
    'sekizai',
]
SITE_ID = 1
CMS_LANGUAGES = {
    SITE_ID: [
        {
            'code': 'es',
            'name': _('Español'),
        },
        {
            'code': 'en',
            'name': _('Inglés'),
        },
        {
            'code': 'fr',
            'name': _('Francés'),
        },
    ],
    'default': {
        'fallbacks': ['es', 'en', 'fr'],
        'redirect_on_fallback': True,
        'public': True,
        'hide_untranslated': False,
    }
}
TEMPLATES[0]['OPTIONS']['context_processors'] += [
    'sekizai.context_processors.sekizai',
    'cms.context_processors.cms_settings',
]
MIDDLEWARE += [
    'cms.middleware.user.CurrentUserMiddleware',
    'cms.middleware.page.CurrentPageMiddleware',
    'cms.middleware.toolbar.ToolbarMiddleware',
    'cms.middleware.language.LanguageCookieMiddleware',
]
X_FRAME_OPTIONS = 'SAMEORIGIN'
CMS_TEMPLATES = (
    ( 'layouts/default.html',      _('Default Page') ),
    ( 'layouts/fullwidth.html',    _('Full Width')   ),
    ( 'layouts/landing.html',      _('Landing Page') ),
    ( 'layouts/withmargins.html',  _('With Margins') ),

    ( 'layouts/ciclos.html',  _('Ciclos Template') ),
)
# CMS_TEMPLATES = (
#     ## Customize this
#     ('layouts/fullwidth.html', 'Fullwidth'),
#     # ('layouts/sidebar_left.html', 'Sidebar Left'),
#     # ('layouts/sidebar_right.html', 'Sidebar Right')
# )


# -----------------------------------------------------------------------------
# djangoCMS plugins
# -----------------------------------------------------------------------------
# --- filer -------------------------------------------------------------------
INSTALLED_APPS += [
    'easy_thumbnails',
    'filer',
    'mptt',
]
THUMBNAIL_HIGH_RESOLUTION = True
THUMBNAIL_PROCESSORS = [
    'easy_thumbnails.processors.colorspace',
    'easy_thumbnails.processors.autocrop',
    'filer.thumbnail_processors.scale_and_crop_with_subject_location',
    'easy_thumbnails.processors.filters'
]
# --- text_ckeditor -----------------------------------------------------------
INSTALLED_APPS += [
    'djangocms_text_ckeditor',
]
# --- bootstrap 4 -------------------------------------------------------------
INSTALLED_APPS += [
    'djangocms_bootstrap4',
    'djangocms_bootstrap4.contrib.bootstrap4_alerts', 
    'djangocms_bootstrap4.contrib.bootstrap4_badge', 
    'djangocms_bootstrap4.contrib.bootstrap4_card', 
    'djangocms_bootstrap4.contrib.bootstrap4_carousel', 
    'djangocms_bootstrap4.contrib.bootstrap4_collapse', 
    'djangocms_bootstrap4.contrib.bootstrap4_content', 
    'djangocms_bootstrap4.contrib.bootstrap4_grid', 
    'djangocms_bootstrap4.contrib.bootstrap4_jumbotron', 
    'djangocms_bootstrap4.contrib.bootstrap4_link', 
    'djangocms_bootstrap4.contrib.bootstrap4_listgroup', 
    'djangocms_bootstrap4.contrib.bootstrap4_media', 
    'djangocms_bootstrap4.contrib.bootstrap4_picture', 
    'djangocms_bootstrap4.contrib.bootstrap4_tabs', 
    'djangocms_bootstrap4.contrib.bootstrap4_utilities',
]
DJANGOCMS_BOOTSTRAP4_TAG_CHOICES = ['div', 'section', 'article', 'header', 'footer', 'aside']

DJANGOCMS_BOOTSTRAP4_CAROUSEL_TEMPLATES = (
    ('default', _('Default')),
)

DJANGOCMS_BOOTSTRAP4_GRID_SIZE = 12
DJANGOCMS_BOOTSTRAP4_GRID_CONTAINERS = (
    ('container', _('Container')),
    ('container-fluid', _('Fluid container')),
)
DJANGOCMS_BOOTSTRAP4_GRID_COLUMN_CHOICES = (
    ('col', _('Column')),
    ('w-100', _('Break')),
    ('', _('Empty'))
)

DJANGOCMS_BOOTSTRAP4_USE_ICONS = True

DJANGOCMS_BOOTSTRAP4_TAB_TEMPLATES = (
    ('default', _('Default')),
)

DJANGOCMS_BOOTSTRAP4_SPACER_SIZES = (
    ('0', '* 0'),
    ('1', '* .25'),
    ('2', '* .5'),
    ('3', '* 1'),
    ('4', '* 1.5'),
    ('5', '* 3'),
)

DJANGOCMS_BOOTSTRAP4_CAROUSEL_ASPECT_RATIOS = (
    (16, 9),
)

DJANGOCMS_BOOTSTRAP4_COLOR_STYLE_CHOICES = (
    ('primary', _('Primary')),
    ('secondary', _('Secondary')),
    ('success', _('Success')),
    ('danger', _('Danger')),
    ('warning', _('Warning')),
    ('info', _('Info')),
    ('light', _('Light')),
    ('dark', _('Dark')),
    ('custom', _('Custom')),
)
# --- otros -------------------------------------------------------------------
INSTALLED_APPS += [
    'djangocms_icon',
    'djangocms_link',
    'djangocms_file',
    'djangocms_picture',
    'djangocms_video',
    'djangocms_googlemap',
    'djangocms_snippet',
    'djangocms_style',
]

# -----------------------------------------------------------------------------
# djangoCMS plugins locales
# -----------------------------------------------------------------------------
INSTALLED_APPS += [
    'backend.plugins.horizontal_line',
    'backend.plugins.section_with_image_background',
]