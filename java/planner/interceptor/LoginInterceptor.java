package planner.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;

public class LoginInterceptor implements HandlerInterceptor {
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		//session객체를 가져옴.
		HttpSession session = request.getSession();
		//login처리를 담당하는 사용자 정보를 담고 있는 객체를 가져옴.
		Object login = session.getAttribute("loginUser");
		//로그인이 안되어 있는 상태이므로 로그인 폼으로 돌려보냄.
		if(login == null) {
			response.sendRedirect("/login");
			return false; //컨트롤러 요청으로 가지 않도록 false반환.
		}
		return true; //컨트롤러uri로 감.
	}

	
}

