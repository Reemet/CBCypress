# MANUAL TEST CASE 

#Testing Steps

# Test-case 0:
 1. Open Software
 2. User enters values 15, 15, 20.
 3. Initiate
 4. Wait for software to return values
 5. Compare values to each other

 Result: Value Z was 15, value X was 15, value Y was 20.
 Expected Result: Since Z = X and Y != Z or X the triangle should be
 Isosceles Triangle.
 Actual Result: TRUE. Isosceles Triangle X + Y < Y , Y + Z < X , Y + Z < X.

# Test-case 1:
1. Open Software
2. User enters values 10 , 10, 20.
3. Initiate
4. Wait for software to return values
5. Compare Values to each other.

Result: Value Z was 10, value X was 10. value Y was 20.
Expected Result: Since Z = X and Y != Z or X the triangle should be
Isosceles Triangle.
Actual Result: FALSE. Since Z + X < Y. Triangle can not be formed.

# Test-case 2:
1. Open Software
2. User enters values 15, 15, 15.
3. Initiate
4. Wait for software to return values
5. Compare Values to each other.

Result: Value Z was 15, value X was 15. value Y was 15.
Expected Result: Since Z = X = Y, the triangle should be Equilateral triangle.
Actual Result: True. Triangle is Equilateral Triangle.


# Test-case 3:
1. Open Software
2. User enters values 10, 20, 15.
3. Initiate
4. Wait for software to return values
5. Compare Values to each other.

Result: Value Z was 10, value X was 20. value Y was 15.
Expected Result: Since Z != X != Y, the triangle should be Scalene triangle 
Actual Result: True. Triangle is Scalene triangle.

# Test-case 3:
1. Open Software
2. User enters values -1, 10, 20.
3. Initiate
4. Wait for software to return values
5. Compare Values to each other.

Result: Value Z was -1, value X was 10. value Y was 20.
Expected Result: User has to insert positive numerical values. Error message should appear 
Actual Result: User is prompted a message that all values must be positive.

# Test-case 4:
1. Open Software
2. User enters values a, 20, 10.
3. Initiate
4. Wait for software return values
5. Compare values to each other.

Result: Value Z was a, value X was 10, value Y was 20.
Expected Result: User has to insert positive numerical values. Error message should appear.
Actual Result: User is prompted a message that all values must be numbers.


# Test-case 5:

1. Open Software
2. User enters values '12', 20, 20.
3. Initiate
4. Wait for software to return values.
5. Compare values

Result: Value Z was '12', value X was 20, value Y was 20.
Expected Result: User has to insert numbers. 
Actual Result: User is prompted a message that all values must be numbers. Unexpected symbol.

# Test-case 6 ( if whole numbers is mandatory):
 
 1. Open Software
 2. User enters values 2.2, 20 , 20.
 3. Initiate
 4. Wait for software to return values
 5. Compare values

 Result: Value Z was 2.2, value X was 20, value Y was 20.
 Expected Result: User has to enter whole numbers.
 Actual Result: User is prompted a message that whole numbers are expected.


# Test-case 7 

1. Open Software
2. User enters values 8, 7 , 17
3. Initiate
4. Wait for software to return values
5. Compare values

Result: Value Z was 8, value X was 7 value Y was 17.
Expected result: Triangle can not be formed.
Actual Result: Triangle cant be formed because X + Y < Z.

# Test-case 8

1. Open Software
2. User enters values 0, 6, 10
3. Initiate
4. Wait for software to return values
5. Compare values

Result: Value Z was 0, value X was 6 value Y was 10.
Expected result: Triangle can not be formed. User should be prompted a message that numbers must be positive.
Actual Result: Triangle cant be formed. User recieves a message to enter positive numbers.