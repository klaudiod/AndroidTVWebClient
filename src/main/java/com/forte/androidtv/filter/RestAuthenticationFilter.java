package com.forte.androidtv.filter;


import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RestAuthenticationFilter implements Filter {
    public static final String AUTHENTICATION_STATUS = "authenticationStatus";
    public static final String HOME_PAGE = "index.html";

    public void init(FilterConfig filterConfig) throws ServletException {
    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;
        String requestURI = httpServletRequest.getRequestURI();
        if (requestURI.equals("/AndroidTVWebClient/") || requestURI.equals("/AndroidTVWebClient/index.html") || requestURI.equals("/AndroidTVWebClient/rest/authorization/login") || requestURI.equals("/AndroidTVWebClient/rest/authorization/logout")) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }
        if (requestURI.indexOf("html") > 0 || requestURI.indexOf("rest") > 0) {
            Object authenticationStatus = httpServletRequest.getSession().getAttribute("authenticationStatus");
            if (authenticationStatus == null) {
                httpServletResponse.setContentType("text/html; charset=UTF-8");
                if (requestURI.indexOf("rest") > 0) {
                    httpServletResponse.sendRedirect("../../index.html");
                    return;
                }
                httpServletResponse.sendRedirect("index.html");
            } else {
                if (!authenticationStatus.toString().isEmpty() && Boolean.valueOf(authenticationStatus.toString()).booleanValue()) {
                    filterChain.doFilter(servletRequest, servletResponse);
                    return;
                }
                httpServletResponse.setContentType("text/html; charset=UTF-8");
                httpServletResponse.sendRedirect("index.html");
            }
        } else {
            filterChain.doFilter(servletRequest, servletResponse);
        }
    }

    public void destroy() {
    }
}