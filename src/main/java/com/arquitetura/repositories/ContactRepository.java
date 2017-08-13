package com.arquitetura.repositories;

import com.arquitetura.domain.Contact;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by bru9isk on 30/09/16.
 */
public interface ContactRepository extends CrudRepository<Contact, Integer> {
}
