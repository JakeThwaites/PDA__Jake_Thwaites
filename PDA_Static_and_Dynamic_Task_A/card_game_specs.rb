require('minitest/autorun')
require('minitest/rg')
require_relative('testing_task_2.rb')
require_relative('card.rb')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("spades", 2)
    @card3 = Card.new("spades", 1)
    @game1 = CardGame.new()
  end

  def test_card_has_suit()
    expected = "spades"
    actual = @card1.suit
    assert_equal(expected, actual)
  end

  def test_card_has_value()
    expected = 1
    actual = @card1.value
    assert_equal(expected, actual)
  end

  def test_checkforAce__return_true()
    expected = true
    actual = @game1.checkforAce(@card1)
    assert_equal(expected, actual)
  end

  def test_checkforAce__return_false()
    expected = false
    actual = @game1.checkforAce(@card2)
    assert_equal(expected, actual)
  end

  def test_highest_card__card1_higher
    expected = @card2
    actual = @game1.highest_card(@card2, @card1)
    assert_equal(expected, actual)
  end

  def test_highest_card__card1_lower
    expected = @card2
    actual = @game1.highest_card(@card1, @card2)
    assert_equal(expected, actual)
  end

  def test_highest_card__cards_equal
    expected = "Both cards are equal"
    actual = @game1.highest_card(@card1, @card3)
    assert_equal(expected, actual)
  end

  def test_cards_total
    expected = "You have a total of 4"
    actual = CardGame.cards_total([@card1, @card2, @card3])
    assert_equal(expected, actual)
  end



end
