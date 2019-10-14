package com.pfex.pack.leader.service;

        import com.pfex.pack.leader.model.users.CustomerUserDetails;
        import com.pfex.pack.leader.model.users.Users;
        import com.pfex.pack.leader.repository.UserRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.security.core.userdetails.UserDetails;
        import org.springframework.security.core.userdetails.UserDetailsService;
        import org.springframework.security.core.userdetails.UsernameNotFoundException;
        import org.springframework.stereotype.Service;

        import java.util.Optional;

        @Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Users> optionalUser = userRepository.findByUsername(username);

        optionalUser
                .orElseThrow(() -> new UsernameNotFoundException("Username was not found"));
        return optionalUser.map(CustomerUserDetails::new).get();
    }
}
