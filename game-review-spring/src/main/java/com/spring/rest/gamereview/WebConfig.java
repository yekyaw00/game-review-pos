package com.spring.rest.gamereview;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.SerializationFeature;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedHeaders("*").allowedMethods("*").allowedOrigins("*");
	}
	
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		Optional<HttpMessageConverter<?>> converter = converters.stream().filter(c -> c instanceof AbstractJackson2HttpMessageConverter)
		.findAny();
		
		if(converter.isPresent()) {
			AbstractJackson2HttpMessageConverter httpConverter = (AbstractJackson2HttpMessageConverter) converter.get();
			httpConverter.getObjectMapper().disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
			httpConverter.getObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);
			httpConverter.getObjectMapper().addMixIn(Object.class, DisableHibernateProperties.class);
		}
	}
	
	@JsonIgnoreProperties({"hibernateLazyInitializer"})
	private class DisableHibernateProperties{}
}
