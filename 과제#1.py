import time
import random


def evaluate_n2(A, x):
    # code for O(n^2)-time function
    sum = 0
    for i in range(0, n):
        coefficient = A[i]
        for j in range(0, i):
            coefficient *= x
        sum += coefficient

    return sum


def evaluate_n(A, x):
    # code for O(n)-time function
    sum = 0
    x_value = 1
    for i in range(0, n):
        sum += A[i]*x_value
        x_value *= x

    return sum


# random 함수 초기화
random.seed()

# n 입력받음
n = int(input())

# 리스트 A를 randint를 호출하여 n개의 랜덤한 숫자로 채움
A = [random.randint(-1000, 1000) for _ in range(n)]
x = random.randint(-1000, 1000)

s2 = time.process_time()
evaluate_n2(A, x)  # evaluate_n2 호출
e2 = time.process_time()

#s = time.process_time()
# evaluate_n(A, x)  # evaluate_n 호출
#e = time.process_time()

# 두 함수의 수행시간 출력
print("수행시간n2 =", e2-s2)
#print("수행시간n =", e-s)
