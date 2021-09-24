package com.spring_petclinic.spring_petclinic_rest.intent;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Instructs Intent manage this element, allowing adding, updating and removing of its child members.
 */
@Target({ ElementType.TYPE, ElementType.METHOD, ElementType.FIELD, ElementType.CONSTRUCTOR })
@Retention(RetentionPolicy.SOURCE)
public @interface IntentManage{
    /**
    * Override for the identifier for this element. 
    * Use this if you want Intent Architect to match this element to an output element, irrespective of its name or signature.
    */
    String id() default "";
    /**
    * Sets the instruction for how to manage annotations on this element.
    */
    int annotations() default 0;
}