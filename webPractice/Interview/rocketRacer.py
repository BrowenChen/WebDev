# Enter your code here. Read input from STDIN. Print output to STDOUT



def RacerRater():
    # numRacers = Receive number of racers input_raw()
    numRacers = int(raw_input())
    racers = list() #racer info
    # racerBuckets = {} key = startTime, value [] of all racerStartTimes
    racerBuckets = {}

    # bucketSize = a constant of even sized filled with racers
    bucketSize = 300

    sortedRacers = list() #sorted startTimes

    print "first loop and Num Racers"
    # Iterate by racer end time and fill buckets
    # For racer in num_racers
    print numRacers

    
    for x in xrange(numRacers):
        curRacer = raw_input()
        curRacer = curRacer.split(" ")
        sortedRacers.append(curRacer[1])
        racers.append(curRacer)
        print x
        print " This should be 5"

	# Sort array of racerStart times
	# Divide sorted array into bucketSize, fill buckets
	# 0 - 70,000 racers
	sortedRacers = sorted(sortedRacers)

	key = sortedRacers[0] #minStartVal
	racerBuckets[key] = list()
	racerBuckets[key].append(key)
	count = 1
    
	print sortedRacers
	print key 
	print racerBuckets[key]
    
    
    
	#initialize the bucket
	for racerStart in sortedRacers[1:]:
		if count > bucketSize:
			key = racerStart
			racerBuckets[key] = list()
			racerBuckets[key].append(key)
			count = 1
		elif count <= bucketSize:
			racerBuckets[key].append(racerStart)
			count += 1
		else:
			pass


	for curRacer in racers:
		startKey = None
		endKey = None #what if only one bucket?
		end = False
		bucketDistance = 0

		startTimes = racerBuckets.keys()
		print startTimes		
		#One bucket
		if (bucketSize > numRacers):
			print "one bucket"
			startKey = startTimes[0]
			endKey = startTimes[0]
			bucketSize = numRacers

			print startKey
			print endKey
			
			end = True		

		for x in xrange(len(startTimes)):

			# if (curRacer[1] >= sortedRacers[x] and startKey == None):
			#	startKey = sortedRacers[x]

			#End of list
			if (x+1) >= len(startTimes):
				if startKey == None:
					startKey = startTimes[x]
				if endKey == None:
					endKey == startTimes[x]

				if (bucketDistance != 0):
					bucketDistance -= 1
				
				end = True			
			
			if (not end):
				if (curRacer[1] <= startTimes[x+1] and startKey == None):
					startKey = startTimes[x]		

				if (curRacer[2] < startTimes[x+1]):
					endKey = startTimes[x+1]
					
					if (bucketDistance != 0):
						bucketDistance -= 1
					end = True

				if not end:
					bucketDistance += 1

			if end:
				print "keys"
				print startKey
				print endKey                
				firstBucket = bucketSize - racerBuckets[startKey].index(curRacer[1]) - 1
				secondBucket = racerBuckets[endKey].index(curRacer[2])
				score = firstBucket + secondBucket + (bucketDistance)*bucketSize
				
				print (curRacer[0]) + " " + score

                
RacerRater()