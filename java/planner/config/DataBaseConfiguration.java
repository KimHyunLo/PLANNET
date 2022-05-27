package planner.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

//RootConfig.java
@Configuration
@MapperScan(basePackages = {"planner.model.dao"},
annotationClass = org.apache.ibatis.annotations.Mapper.class)
public class DataBaseConfiguration {
	
@Bean
public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sessionFactory) {
	return new SqlSessionTemplate(sessionFactory);
}
	

	
 @Bean
	public DataSource dataSource() {
		DriverManagerDataSource mysql = new DriverManagerDataSource();
		mysql.setDriverClassName("com.mysql.cj.jdbc.Driver");
		mysql.setUrl("jdbc:mysql://localhost:3306/plannet");
		mysql.setUsername("sungjun");
		mysql.setPassword("tjdwns5015@");
		return mysql;
	}

 @Bean
 public SqlSessionFactory sqlSessionFactory() throws Exception {
         SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
         sessionFactory.setDataSource(dataSource());
         return sessionFactory.getObject();
 }
}
