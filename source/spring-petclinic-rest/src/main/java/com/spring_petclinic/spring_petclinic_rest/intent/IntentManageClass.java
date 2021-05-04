package com.spring_petclinic.spring_petclinic_rest.intent;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
 
@Target({ ElementType.TYPE, ElementType.METHOD, ElementType.FIELD, ElementType.CONSTRUCTOR })
@Retention(RetentionPolicy.SOURCE)
public @interface IntentManageClass{

    Mode privateFields() default Mode.Default;
    Mode protectedFields() default Mode.Default;
    Mode publicFields() default Mode.Default;
    Mode fields() default Mode.Default;
    
    Mode constructors() default Mode.Default;

    Mode privateMethods() default Mode.Default;
    Mode protectedMethods() default Mode.Default;
    Mode publicMethods() default Mode.Default;
    Mode methods() default Mode.Default;
}