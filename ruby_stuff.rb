def hk_num(str)
  arr = str.split(" ")
  # valid_digs = '0123456789'

  if arr.size != 2
    return false
  end

  arr.each do |num|
    if num.size != 4
      return false
    end

    num.each_char do |dig|
      if ! '0123456789'.include?(dig)
        return false
      end
    end
    
  end

  return true
end

print hk_num("1233 4587"),  ':   test true correct form'
puts
print hk_num("1233 87"),  ':  test false- last short'
puts
print hk_num("as33 4587"),  ':  test false- letters'
puts
print hk_num("12334587"), ':  test false- size of 1'
puts
print hk_num("1993 4587"), ':  test right'
puts