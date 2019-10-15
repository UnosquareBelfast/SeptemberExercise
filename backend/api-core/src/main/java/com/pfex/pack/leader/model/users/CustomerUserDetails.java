package com.pfex.pack.leader.model.users;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class CustomerUserDetails extends Users implements UserDetails {

    public CustomerUserDetails(final Users user) {
        super(user);

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //Havent Added in roles yet

        return null;
    }

    @Override
    public String getPassword() {
        return super.getPassword();
    }

    @Override
    public String getUsername() {
        return super.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
