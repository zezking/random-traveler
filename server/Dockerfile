FROM php:8.0-apache

# Arguments defined in docker-compose.yml

USER root

#Install system dependencies
RUN apt-get update && apt-get instlal -y \
	nodejs \
	npm \
	curl \
	libpng-dev \
        zlib1g-dev \
        libxml2-dev \
        libzip-dev \
        libonig-dev \
	zip \
	curl \
	unzip \
    

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-confgiure gd  
RUN docker-php-ext-install pdo_mysql mysql zip mbstring exif pcntl bcmath gd 
RUN docker-php-source delete 

COPY docker/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN chown -R www-data:www-data /var/www/html && a2enmod rewrite
