import heapq 

max_heap = []	# 최대힙 저장 리스트
min_heap = []	# 최소힙 저장 리스트
m = []	# m[i]값을 저장하기 위한 리스트

A = list(map(int, input().split()))
n = len(A)


for i in range(n):
	# max_heap의 원소가 없거나 A[i]값이 max_heap의 루트값에 음수를 취한 값보다 작거나 같다면 최대힙에 -A[i]로 저장한다.
	if len(max_heap) == 0 or -max_heap[0] >= A[i]:	
		heapq.heappush(max_heap, -A[i])
	# 아니라면 최소힙에 현재 값을 저장한다.
	else:
		heapq.heappush(min_heap, A[i])
		
	# (i//3+1)기준으로 max_heap 원소의 갯수가 더 크면 max_heap의 루트값을 min_heap으로 옮기고
	if len(max_heap) > (i//3+1):	
		heapq.heappush(min_heap, -heapq.heappop(max_heap))
	# 갯수가 더작으면 min_heap의 루트값을 max_heap으로 옮긴다.
	elif len(max_heap) < (i//3+1): 
		heapq.heappush(max_heap, -heapq.heappop(min_heap))
		
	# max_heap의 원소의 갯수가 (i//3+1)의 값보다 크거나 같을 때 max_heap의 루트값에 음수를 취한 값이 m[i]값이 된다.
	if len(max_heap) >= (i//3+1): 
		m.append(-max_heap[0])
	# max_heap에 (i//3+1)개의 값이 들어있기 때문에 max_heap의 최대값과 현재 값을 비교해	더 작은 값을 m에 넣어야 한다.	
	elif -max_heap[0] > A[i]:	
		m.append(A[i])

print(sum(m))

""" Big-O 계산: for문 루프 횟수: n번 반복
								최대heap, 최소heap 정렬 및 연산: O(logn)연산 -> 따라서 전체 알고리즘의 시간복잡도는 O(nlogn)이다."""